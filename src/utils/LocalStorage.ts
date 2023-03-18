export const getLocalStorageValue = (key: string) => {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem(key);
    const initial = saved !== null ? JSON.parse(saved) : null;
    return initial;
  }
};

export const setLocalStorageValue = (key: string, defaultValue: any) => {
  localStorage.setItem(key, JSON.stringify(defaultValue));
};
