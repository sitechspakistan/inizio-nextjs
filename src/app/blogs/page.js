import SecondHero from "../components/SecondHero"
import PostBox from "../components/PostBox"
export default function blogs() {
    return (
        <>
            <SecondHero subheading={"Blogs"}
                heading={"Blogs"}
                description={"Stay ahead with the latest insights on our services, promotional products, emerging branding trends, and effective marketing strategies. Our industry experts provide curated articles, tips, and case studies to help you grow your business and elevate your brand."} />
            <PostBox />
        </>
    )
}