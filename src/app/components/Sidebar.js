"use client";

import { useRouter, usePathname } from 'next/navigation';

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();

  const navigation = [
    {
      name: 'Smart Visa',
      path: '/smartVisa',
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      )
    },
    {
      name: 'MRZ Reader',
      path: '/mrzReader',
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    }
  ];

  return (
    <div className="fixed inset-y-0 left-0 w-16 bg-gray-900">
      <div className="flex h-full flex-col items-center py-6 space-y-8">
        {navigation.map((item) => (
          <button
            key={item.name}
            onClick={() => router.push(item.path)}
            className={`group flex flex-col items-center text-xs ${
              pathname === item.path
                ? 'text-white'
                : 'text-gray-400 hover:text-white'
            }`}
            title={item.name}
          >
            <div className={`p-2 rounded-lg ${
              pathname === item.path
                ? 'bg-gray-800'
                : 'group-hover:bg-gray-800'
            }`}>
              {item.icon}
            </div>
            <span className="mt-2">{item.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
} 