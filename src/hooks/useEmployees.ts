import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import type { Employee, EmployeeWithPayments } from '../lib/supabase';
import { useAuth } from './useAuth';

export const useEmployees = () => {
  const { user } = useAuth();
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchEmployees = async () => {
    if (!user) {
      setEmployees([]);
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('employees')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setEmployees(data || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch employees');
    } finally {
      setLoading(false);
    }
  };

  const addEmployee = async (employeeData: Omit<Employee, 'id' | 'user_id' | 'created_at' | 'updated_at'>) => {
    if (!user) throw new Error('User not authenticated');

    const { data, error } = await supabase
      .from('employees')
      .insert([
        {
          ...employeeData,
          user_id: user.id,
        },
      ])
      .select()
      .single();

    if (error) throw error;
    
    setEmployees(prev => [data, ...prev]);
    return data;
  };

  const updateEmployee = async (id: string, updates: Partial<Employee>) => {
    const { data, error } = await supabase
      .from('employees')
      .update(updates)
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    
    setEmployees(prev => prev.map(emp => emp.id === id ? data : emp));
    return data;
  };

  const deleteEmployee = async (id: string) => {
    const { error } = await supabase
      .from('employees')
      .delete()
      .eq('id', id);

    if (error) throw error;
    
    setEmployees(prev => prev.filter(emp => emp.id !== id));
  };

  const getEmployeeWithPayments = async (id: string): Promise<EmployeeWithPayments | null> => {
    const { data: employee, error: empError } = await supabase
      .from('employees')
      .select('*')
      .eq('id', id)
      .single();

    if (empError) throw empError;

    const { data: payments, error: payError } = await supabase
      .from('payments')
      .select('*')
      .eq('employee_id', id)
      .order('payment_date', { ascending: false });

    if (payError) throw payError;

    return {
      ...employee,
      payments: payments || [],
    };
  };

  useEffect(() => {
    fetchEmployees();
  }, [user]);

  return {
    employees,
    loading,
    error,
    addEmployee,
    updateEmployee,
    deleteEmployee,
    getEmployeeWithPayments,
    refetch: fetchEmployees,
  };
};