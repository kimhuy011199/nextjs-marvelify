'use client';

import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div>
      <Button onClick={() => console.log('hello world')}>Click me</Button>
    </div>
  );
}
