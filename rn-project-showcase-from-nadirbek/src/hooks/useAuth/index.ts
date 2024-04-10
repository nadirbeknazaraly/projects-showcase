import { useEffect, useState } from 'react';
import { getUserToken } from 'store/auth/thunk';
import { useAppDispatch, useAppSelector } from 'hooks/Redux';

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const { token } = useAppSelector(state => state.authThunk);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUserToken = async () => {
      setLoading(prevState => !prevState);
      await dispatch(getUserToken());
      setLoading(prevState => !prevState);
    };

    fetchUserToken().then(() => {});
  }, [dispatch]);

  return {
    isLoggedIn: !!token,
    loading,
  };
};
