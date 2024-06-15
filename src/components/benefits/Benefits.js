import './benefits.scss';

import BenefitItem from './benefitItem/BenefitItem';
import { benefits } from '../../helpers/benefits/benefits';

const Benefits = () => {
    return ( 
        <div className="benefits">
            <div className="container">
            <div className="benefits__inner">
                {benefits.map((benefit) => {
                return (
                    <BenefitItem
                    img={benefit.img}
                    title={benefit.title}
                    descr={benefit.descr}
                    key={benefit.id}
                    />
                );
                })}
            </div>
            </div>
        </div>
     );
}
 
export default Benefits;