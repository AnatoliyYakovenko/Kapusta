import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectIsRefreshing,
  selectUser,
  selectAccessToken,
  selectSid,
  selectBalance,
  selectRegistration,
  selectShowBalanceModal,
} from '../redux/auth/authSelectors';
export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const isRefreshing = useSelector(selectIsRefreshing);
  const accessToken = useSelector(selectAccessToken);
  const sid = useSelector(selectSid);
  const balance = useSelector(selectBalance);
  const registration = useSelector(selectRegistration);
  const showBalanceModal = useSelector(selectShowBalanceModal);
  return {
    isLoggedIn,
    user,
    isRefreshing,
    accessToken,
    sid,
    balance,
    registration,
    showBalanceModal,
  };
};

// const { isRefreshing } = useAuth();
