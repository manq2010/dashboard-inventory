import React from 'react';
import Image from 'next/image'

export default function Footer() {
  return (
    <footer>
        <a
          href="https://mancobasihlongonyane.onrender.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
            Created by {' '}
        <span>
            <Image
            priority
            src="/images/profile.jpeg" 
            alt="Logo" 
            width={72} 
            height={16} 
            />
        </span>
        </a>
    </footer>
  );
}
