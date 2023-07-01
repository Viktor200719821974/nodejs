// import { IMAGES_LEARN_COMPONENT } from '../../../constants';
// import coffer from '../../../icons/coffer.svg';

// const PartLearnComponent = ({
//     part1, part2, part3, part4, chapter,
// }) => {
//     return (
//         <>
//             {part1.length > 0 && 
//                 part1.map(c => 
//                     <div 
//                         className={
//                             chapter % 2 === 0 
//                                 ? "mainLearnPage_div_button_right_learnComponent"
//                                 : "mainLearnPage_div_button_learnComponent"
//                         }
//                         style={{width: `${c.width}`}}
//                         key={c.id}
//                         >
//                         <button className="mainLearnPage_button_with_image_learnComponent">
//                             <img src={IMAGES_LEARN_COMPONENT + c.src} alt={c.alt}/>
//                         </button>
//                     </div>
//                 )
//             }
//             {part1.length > 0 && 
//                 <div 
//                     className={
//                         chapter % 2 === 0 
//                             ? "mainLearnPage_div_button_right_learnComponent"
//                             : "mainLearnPage_div_button_learnComponent"
//                     }
//                     style={{width: '40%'}}
//                     >
//                     <img src={coffer} alt={"coffer stamp"}/>
//                 </div>
//             }
//             {part2.length > 0 && 
//                 part2.map(c => 
//                     <div 
//                         className={
//                             chapter % 2 === 0 
//                                 ? "mainLearnPage_div_button_right_learnComponent"
//                                 : "mainLearnPage_div_button_learnComponent"
//                             }
//                         style={{width: `${c.width}`}}
//                         key={c.id}
//                         >
//                         <button className="mainLearnPage_button_with_image_learnComponent">
//                             <img src={IMAGES_LEARN_COMPONENT + c.src} alt={c.alt}/>
//                         </button>
//                     </div>
//                 )
//             }           
//             {part3.map(c => 
//                 <div 
//                     className={
//                         chapter % 2 === 0 || chapter === 1
//                             ? "mainLearnPage_div_button_learnComponent"
//                             : "mainLearnPage_div_button_right_learnComponent"
//                     }
//                     style={{width: `${c.width}`}}
//                     key={c.id}
//                     >
//                     <button className="mainLearnPage_button_with_image_learnComponent">
//                         <img src={IMAGES_LEARN_COMPONENT + c.src} alt={c.alt}/>
//                     </button>
//                 </div>
//             )}
//             <div 
//                 className={
//                     chapter % 2 === 0 || chapter === 1
//                         ? "mainLearnPage_div_button_learnComponent"
//                         : "mainLearnPage_div_button_right_learnComponent"
//                 }
//                 style={{width: '40%'}}
//                 >
//                 <img src={coffer} alt={"coffer stamp"}/>
//             </div>
//             {part4.map(c => 
//                 <div 
//                     className={
//                         chapter % 2 === 0 || chapter === 1
//                             ? "mainLearnPage_div_button_learnComponent"
//                             : "mainLearnPage_div_button_right_learnComponent"
//                     }
//                     style={{width: `${c.width}`}}
//                     key={c.id}
//                     >
//                     <button className="mainLearnPage_button_with_image_learnComponent">
//                         <img src={IMAGES_LEARN_COMPONENT + c.src} alt={c.alt}/>
//                     </button>
//                 </div>
//             )}
//         </>    
//     );
// };

// export default PartLearnComponent;