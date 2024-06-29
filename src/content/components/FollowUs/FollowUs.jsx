import Image from 'next/image';

import droneForce from '../../../assets/drone_force.png'
import logo from '../../../assets/main-logo.svg'

import style from "./FollowUs.module.css";

/*
https://forms.gle/sTGRpi1EcPEfSrxz6
https://lobbyx.army/tor/operator-bpla-do-31-ombr
https://www.work.ua/jobs/5647072
https://robota.ua/company0/vacancy10016403
*/

function FollowUs() {
    return (
        <section id="followUs" className={style.section}>
            <h2 className={style["sec-title"]}>Долучитися</h2>
            <div class={style['links']}>
                <a href="https://forms.gle/sTGRpi1EcPEfSrxz6" target="_blank">
                    <Image src={droneForce} height={50} width={140} style={{ aspectRatio: '2.8'}} alt="" />
                </a>
                <a href="https://lobbyx.army/tor/operator-bpla-do-31-ombr" target="_blank">
                <Image src={logo} height={50} style={{ aspectRatio: '1.14'}} alt="" />
                    Оператор БПЛА
                </a>
                <a href="https://www.work.ua/jobs/5647072/" target="_blank">
                Oператор беспілотних літальних апаратів (БПЛА) в складі батальйону безпілотних систем 31 ОМБр.
                </a>
                <a href="https://robota.ua/company0/vacancy10016403" target="_blank">
                    Батальйон безпілотних систем 31 ОМБр.
                </a>
            </div>
        </section>
    )
}

export default FollowUs
