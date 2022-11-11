import { useCallback, useState, useEffect } from 'react';

const useSuiWallet = () => {
  const [wallet, setWallet] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const [account, setAccount] = useState(false);

  useEffect(() => {
    const cb = () => {
      setWallet(window.suiWallet);
    };
    if (window.suiWallet) {
      cb();
      return;
    }
    window.addEventListener('load', cb);
    return () => {
      window.removeEventListener('load', cb);
    };
  }, []);

  useEffect(() => {
    if (wallet) {
      wallet.hasPermissions().then(setIsActive);
    }
  }, [wallet]);

  const getSuiWallet = () => {
    if (window.suiWallet) {
      setWallet(window.suiWallet);
    } else {
      setWallet(null);
    }
  };
  const connect = useCallback(async () => {
    getSuiWallet();

    try {
      await wallet.requestPermissions();
      setIsActive(true);
    } catch (error) {
      console.log('connect error', error);
    }
  }, [wallet]);

  useEffect(() => {
    if (isActive && wallet) {
      wallet.getAccounts().then((accounts) => {
        setAccount(accounts[0]);
      });
    } else {
      setAccount(null);
    }
  }, [isActive, wallet]);

  return {
    connect,
    suiWallet: wallet,
    isActive,
    account,
  };
};

export default useSuiWallet;
