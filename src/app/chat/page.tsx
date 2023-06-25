import Image from 'next/image';

export default function ChatScreen() {
  return (
    <Image
      src={require('@/assets/chat.png')}
      className='w-screen h-screen'
      alt=''
    />
  );
}
