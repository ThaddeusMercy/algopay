import { useState, useCallback } from 'react';
import { supabase } from '../lib/supabase';
import type { Payment } from '../lib/supabase';
import { useAuth } from './useAuth';

export const usePayments = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createPayment = useCallback(async (paymentData: Omit<Payment, 'id' | 'user_id' | 'created_at'>) => {
    setLoading(true);
    setError(null);
    if (!user) {
      throw new Error('User not authenticated');
    }

    try {
      const { data, error } = await supabase
        .from('payments')
        .insert([{
          ...paymentData,
          user_id: user.id,
        }])
        .select()
        .single();

      if (error) throw error;
      return data;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to create payment';
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setLoading(false);
    }
  }, [user]);

  const updatePaymentStatus = useCallback(async (
    id: string, 
    status: 'pending' | 'completed' | 'failed',
    transactionHash?: string
  ) => {
    setLoading(true);
    setError(null);

    try {
      const updateData: Partial<Payment> = { status };
      if (transactionHash) {
        updateData.transaction_hash = transactionHash;
      }

      const { data, error } = await supabase
        .from('payments')
        .update(updateData)
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;
      return data;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to update payment';
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setLoading(false);
    }
  }, []);

  const getPaymentsByEmployee = useCallback(async (employeeId: string) => {
    setLoading(true);
    setError(null);

    try {
      const { data, error } = await supabase
        .from('payments')
        .select('*')
        .eq('employee_id', employeeId)
        .order('payment_date', { ascending: false });

      if (error) throw error;
      return data || [];
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to fetch payments';
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setLoading(false);
    }
  }, []);

  const getAllPayments = useCallback(async () => {
    setLoading(true);
    setError(null);

    if (!user) {
      return [];
    }

    try {
      const { data, error } = await supabase
        .from('payments')
        .select('*')
        .eq('user_id', user.id)
        .order('payment_date', { ascending: false });

      if (error) throw error;
      return data || [];
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to fetch all payments';
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setLoading(false);
    }
  }, [user]);

  return {
    loading,
    error,
    createPayment,
    updatePaymentStatus,
    getPaymentsByEmployee,
    getAllPayments,
  };
};