import Link from 'next/link';
import { useSession, signIn, signOut } from "next-auth/react"

const HomeNavbar = () => {
    const { data: session } = useSession()
    if (session && session.user) {
        return (
            <div className="navbar px-10">
                <div className="flex-1">
                    <Link href="/" className='btn btn-ghost normal-case text-xl'>
                        Profile matome
                    </Link>
                </div>
                <div className="navbar-end">
                    <ul className="menu menu-horizontal px-1">
                        <div className="flex items-center"> {/* 追加されたflexコンテナ */}
                            Signed in as {session.user.name}
                        </div>
                        <li>
                            <Link href="/profiles/ranmaru">
                                マイページ
                            </Link>
                        </li>
                        <li>
                            <Link href="/dashboard">
                                編集画面
                            </Link>
                        </li>
                        <li>
                            <button onClick={() => signOut({callbackUrl: 'http://localhost:3000'})}>
                                サインアウト
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        )
    } else {
        return (
            <div className="navbar px-10">
                <div className="flex-1">
                    <Link href="/" className='btn btn-ghost normal-case text-xl'>
                        Profile matome
                    </Link>
                </div>
                <div className="navbar-end">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <button onClick={() => signIn()}>
                                サインイン
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        )

    }
};
export default HomeNavbar;