'use client';

import { PrivyProvider } from '@privy-io/react-auth';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <PrivyProvider
      appId="cm3mzdfzv01ihygddxmdsap5g"
      config={{
        appearance: {
          theme: 'light',
          accentColor: '#676FFF',
          logo: 'https://pub-0a8864c7b35943799c57616bf42c2669.r2.dev/positive-icon.png',
        },
        embeddedWallets: {
          createOnLogin: 'users-without-wallets',
        },
      }}
    >
      {children}
    </PrivyProvider>
  );
}