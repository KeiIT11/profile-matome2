import Head from "next/head"
import Image from "next/image"
import SNSCardList from "@/features/profiles/components/SNSCardList";
import fetchUserSNSCardIndex from "@/features/profiles/apis/fetchUser";
import ShowingSelfIntroduction from "@/features/profiles/components/Introduction";
import ShowingProfileIcon from "@/features/profiles/components/ProfileIcon";

//dynamicParams = falseにすることで、動的ルーティングされたアドレス
//以外にアクセスすると404ページにリダイレクトする。
//例：/profiles/unknown など定義していないアドレスに接続すると
//404に飛ばされる。
export const dynamicParams = false // true | false,

//ここでUserIDを取得することで、ドメイン名を動的に変更できる。
export async function getStaticPaths() {
    return {
        paths: [
            { params: { id: 'ranmaru' } },
            { params: { id: 'sweet' } },
        ],
        fallback: false,
    };
}

export async function getStaticProps() {
    const allSNSCardIndex = await fetchUserSNSCardIndex()
    return {
        props: {
            allSNSCardIndex,
        },
    };
}
//サンプル用自己紹介文
const introductionSample: string = `
就活用のサンプルをコピー
はじめまして、岡山県立大学３年の伊藤嵐丸と申します。
私は普段大学では、学科の名前の通り、情報通信に関することとか、アルゴリズムや人工知能とかについても学んでいます。
私が大学生活で特に力を入れたのが3つあって、

１、英語の勉強
主にTOEICの勉強を頑張って840点取ることが出来ました。１ヶ月の勉強で取ることができたのですが、それは勉強の方法について１０冊以上の本を読んで、効率の良い勉強法を身につけられたことが関係していると思います。

２、アプリ開発
個人開発でアプリを２つリリースしました。その経験を活かして、勉強できない人を助ける個人開発でアプリを２つリリースしました。
アプリの内容としては、勉強できないのを克服して、勉強できない人を助けるアプリを作りました。
・・・
`;

export default function Page({ allSNSCardIndex }: { allSNSCardIndex: SNSCardIndex[] }) {
    return (
        <>
            <Head>
                <title>test</title>
            </Head>
            <main className='min-h-screen p-20 space-y-8'>
                <ShowingProfileIcon iconPath="/pokemon.jpeg" userName="ランマル" userID="ranmaru" />
                <ShowingSelfIntroduction introduction={introductionSample} />
                <SNSCardList snsCardIndexList={allSNSCardIndex} />

                <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                    <div className="md:flex">
                        <div className="md:shrink-0">
                            <Image
                                width={100}
                                height={24}
                                className="h-48 w-full object-cover md:h-full md:w-48"
                                src="/pokemon.jpeg"
                                alt="Modern building architecture"
                            />
                        </div>
                        <div className="p-8">
                            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Company retreats</div>
                            <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Incredible accommodation for your team</a>
                            <p className="mt-2 text-slate-500">Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.</p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}


