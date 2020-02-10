import React from 'react';
const Result = ({ firstQuest, secondQuest, thirdFirstQuest, thirdFiveQuest, thirdThirdQuest,
  fourQuest, fiveQuest, sixQuest, sevenQuest }) => {
    
  let count =0
    
  return (
    
    <div className="result">
       <p>1/7  {firstQuest === 'Орел' ? `Это правильный ответ! 😉`: `Нет, правильный ответ Орел 😒`}</p>
       <p className="hidden">{firstQuest === 'Орел' ? count++:count}</p>
      <p>2/7 {secondQuest === "Питер Петтигрю" ? `Это правильный ответ! 😉 ` : 
      `Нет, правильный ответ Питер Петтигрю 😒`}</p>
      <p className="hidden">{secondQuest === "Питер Петтигрю"? count++:count}</p>
      <p>3/7  {thirdFirstQuest && thirdThirdQuest  && thirdFiveQuest ? `Это правильный ответ! 😉` :
        'Нет, правильный ответ Бузиновая палочка, Воскрешающий камень и Мантия невидимка 😒'}</p>
        <p className="hidden">{thirdFirstQuest && thirdThirdQuest  && thirdFiveQuest ? count++:count}</p>
      <p>4/7 {fourQuest === "7" ? "Это правильный ответ! 😉" : `Нет, правильный ответ 7 😒`}</p>
      <p className="hidden">{fourQuest === "7" ? count++:count}</p>
      <p>5/7 {fiveQuest === "Выдра" ? "Это правильный ответ! 😉" : `Нет, правильный ответ Выдра 😒`}</p>
      <p className="hidden">{fiveQuest === "Выдра" ? count++:count}</p>
      <p>6/7 {sixQuest === 'В кабинете директора' ? "Это правильный ответ! 😉" : 
      `Нет, правильный ответ В кабинете директора 😒`}</p>
      <p className="hidden">{sixQuest === 'В кабинете директора' ?  count++:count}</p>
      <p>7/7 {sevenQuest === '1945' ? "Это правильный ответ! 😉" : `Нет, правильный ответ 1945 😒`}</p>
      <p className="hidden">{sevenQuest === '1945' ? count++:count}</p>
      <p>{count} из 7</p>
      {(count>=6)?'Вы Волшебник! 😇': (count>=4)?"Почти Волшебник! 😎": 'Пока что Вы Магл! 🤓'}
   </div>
  )

}
export default Result
