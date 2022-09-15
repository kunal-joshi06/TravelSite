import Link from "next/link";

const Breadcrumb = () => (
  <section className="breadcrumb">
    <div className="container">
      <ul className="breadcrumb-list">
        <li><Link href="/"><a ><i className="icon-home"></i></a></Link></li>
        <li><Link href="/transport"><a >Transport</a></Link></li>
      </ul>
    </div>
  </section>
);


export default Breadcrumb