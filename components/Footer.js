import {
  PlusCircleIcon,
  GlobeAltIcon,
  PaperAirplaneIcon,
  UserCircleIcon,
} from '@heroicons/react/outline';
import { HomeIcon } from '@heroicons/react/solid';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useRecoilState } from 'recoil';
import { modalState } from '../atoms/ModalAtom';

function Footer() {
  const { data: session } = useSession();
  const [open, setOpen] = useRecoilState(modalState);

  return (
    <div className="bg-white sticky bottom-0 z-50 md:hidden">
      {session ? (
        <>
          <div className="flex justify-around py-6 items-center">
            <HomeIcon className="footBtn" />
            <GlobeAltIcon className="footBtn" />
            <PlusCircleIcon onClick={() => setOpen(true)} className="footBtn" />
            <PaperAirplaneIcon className="footBtn rotate-45" />
            <img
              onClick={signOut}
              src={session.user.image}
              alt="profile Pic"
              className="h-8 w-8 rounded-full cursor-pointer"
            />
          </div>
        </>
      ) : (
        <p className="hidden">.</p>
      )}
    </div>
  );
}

export default Footer;
