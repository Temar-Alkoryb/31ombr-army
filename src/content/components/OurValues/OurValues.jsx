import style from "./OurValues.module.css";

function OurValues({ ourValuesData }) {
  const { categorys, title } = ourValuesData;
  return (
    <section id="OurValues" className={style.section}>
      <div className="container">
        <div className={style.content}>
          <h2 className={style["sec-title"]}>{title}</h2>
          <ul className={style.list}>
            {categorys.map((item, idx) => (
              <li key={idx}>
                <div>
                  <h3 className={style['third-title']}>{item.title}</h3>
                  <p className={style.text}>{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default OurValues;
