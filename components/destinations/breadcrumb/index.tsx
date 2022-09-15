import Link from "next/link";

const Breadcrumb = () => (
  <section className="breadcrumb">
    <div className="container">
      <ul className="breadcrumb-list">
        <li><Link href="/"><a ><i className="icon-home"></i></a></Link></li>
        <li><Link href="/destinations"><a >Destinations</a></Link></li>
      </ul>
    </div>
  </section>
);


export default Breadcrumb