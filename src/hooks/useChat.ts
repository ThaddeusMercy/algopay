import { useState, useEffect, useCallback } from 'react';
import { supabase } from '../lib/supabase';
import { useAuth } from './useAuth';
import type { ChatSession, ChatMessage } from '../lib/supabase';

export const useChat = () => {
  const { user } = useAuth();
  const [chatSessions, setChatSessions] = useState<ChatSession[]>([]);
  const [loadingSessions, setLoadingSessions] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchChatSessions = useCallback(async () => {
    if (!user) {
      setChatSessions([]);
      setLoadingSessions(false);
      return;
    }

    setLoadingSessions(true);
    setError(null);
    try {
      const { data, error } = await supabase
        .from('chat_sessions')
        .select('*')
        .eq('user_id', user.id)
        .order('updated_at', { ascending: false });

      if (error) throw error;
      setChatSessions(data || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch chat sessions');
      console.error('Error fetching chat sessions:', err);
    } finally {
      setLoadingSessions(false);
    }
  }, [user]);

  useEffect(() => {
    fetchChatSessions();
  }, [fetchChatSessions]);

  const createChatSession = useCallback(async (title: string, initialMessageContent?: string): Promise<ChatSession | null> => {
    if (!user) {
      setError('User not authenticated');
      return null;
    }

    setError(null);
    try {
      const { data, error } = await supabase
        .from('chat_sessions')
        .insert({
          user_id: user.id,
          title: title,
          last_message_content: initialMessageContent || null,
          last_message_timestamp: initialMessageContent ? new Date().toISOString() : null,
        })
        .select()
        .single();

      if (error) throw error;
      setChatSessions(prev => [data, ...prev]);
      return data;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create chat session');
      console.error('Error creating chat session:', err);
      return null;
    }
  }, [user]);

  const updateChatSession = useCallback(async (sessionId: string, updates: Partial<ChatSession>): Promise<ChatSession | null> => {
    if (!user) {
      setError('User not authenticated');
      return null;
    }

    setError(null);
    try {
      const { data, error } = await supabase
        .from('chat_sessions')
        .update(updates)
        .eq('id', sessionId)
        .eq('user_id', user.id)
        .select()
        .single();

      if (error) throw error;
      setChatSessions(prev => prev.map(session => session.id === sessionId ? data : session));
      return data;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update chat session');
      console.error('Error updating chat session:', err);
      return null;
    }
  }, [user]);

  const deleteChatSession = useCallback(async (sessionId: string): Promise<boolean> => {
    if (!user) {
      setError('User not authenticated');
      return false;
    }

    setError(null);
    try {
      const { error } = await supabase
        .from('chat_sessions')
        .delete()
        .eq('id', sessionId)
        .eq('user_id', user.id);

      if (error) throw error;
      setChatSessions(prev => prev.filter(session => session.id !== sessionId));
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete chat session');
      console.error('Error deleting chat session:', err);
      return false;
    }
  }, [user]);

  const getChatMessages = useCallback(async (sessionId: string): Promise<ChatMessage[]> => {
    if (!user) {
      setError('User not authenticated');
      return [];
    }

    setError(null);
    try {
      const { data, error } = await supabase
        .from('chat_messages')
        .select('*')
        .eq('session_id', sessionId)
        .eq('user_id', user.id)
        .order('created_at', { ascending: true });

      if (error) throw error;
      return data || [];
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch chat messages');
      console.error('Error fetching chat messages:', err);
      return [];
    }
  }, [user]);

  const addChatMessage = useCallback(async (sessionId: string, type: 'user' | 'assistant', content: string): Promise<ChatMessage | null> => {
    if (!user) {
      setError('User not authenticated');
      return null;
    }

    setError(null);
    try {
      const { data, error } = await supabase
        .from('chat_messages')
        .insert({
          session_id: sessionId,
          user_id: user.id,
          type: type,
          content: content,
        })
        .select()
        .single();

      if (error) throw error;

      // Update the last message in the session
      await updateChatSession(sessionId, {
        last_message_content: content,
        last_message_timestamp: new Date().toISOString(),
        updated_at: new Date().toISOString(), // Explicitly update updated_at
      });

      return data;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to add chat message');
      console.error('Error adding chat message:', err);
      return null;
    }
  }, [user, updateChatSession]);

  return {
    chatSessions,
    loadingSessions,
    error,
    fetchChatSessions,
    createChatSession,
    updateChatSession,
    deleteChatSession,
    getChatMessages,
    addChatMessage,
  };
};