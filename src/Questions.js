import React from 'react';
import { HashRouter, NavLink } from 'react-router-dom'
import {
  FirstQuestionsList, secondQuestionsList,
  fourQuestionsList, fiveQuestionsList, sixQuestionsList
} from './api'
class Questions extends React.Component {

  render() {
    const { firstQuest, secondQuest, thirdFirstQuest, thirdSecondQuest, thirdThirdQuest, thirdFourQuest,
      thirdFiveQuest, fourQuest, fiveQuest, sixQuest, sevenQuest, handleChange } = this.props;
    return (
      <div className="content">
        <h1 className="header">Магл или Волшебник?</h1>
        <form className="form">
          <div className="block_question">
            <p className='question'> 1/7 Какое животное изображено на гербе факультета Когтевран?</p>
            {FirstQuestionsList.map(i => (<>
              <label ><input type="radio" value={i.name} name="firstQuest" className="ui radio checkbox"
                checked={firstQuest === i.name} onChange={handleChange} /> {i.name}</label>
              <br></br> </>))}
          </div>

          <div className="block_question">
            <p className='question'> 2/7 Кто убил Седрика Диггори?</p>
            {secondQuestionsList.map(i => (<>
              <label ><input type="radio" value={i.name} name="secondQuest" className="ui radio checkbox"
                checked={secondQuest === i.name} onChange={handleChange} /> {i.name}</label>
              <br></br> </>))}
          </div>

          <div className="block_question">
            <p className='question'> 3/7 Дары Смерти? (Возможны два и более вариантов ответа)</p>
            <label><input type="checkbox" name="thirdFirstQuest" className="ui checked checkbox"
              checked={thirdFirstQuest} onChange={handleChange} /> Бузинная палочка</label>
            <br></br>
            <label><input type="checkbox" name="thirdSecondQuest" className="ui checked checkbox"
              checked={thirdSecondQuest} onChange={handleChange} /> Диадема Кандиды Когтевран</label>
            <br></br>
            <label><input type="checkbox" name="thirdThirdQuest" className="ui checked checkbox"
              checked={thirdThirdQuest} onChange={handleChange} /> Мантия-невидимка</label>
            <br></br>
            <label><input type="checkbox" name="thirdFourQuest" className="ui checked checkbox"
              checked={thirdFourQuest} onChange={handleChange} /> Меч Годрика Гриффиндора</label>
            <br></br>
            <label><input type="checkbox" name="thirdFiveQuest" className="ui checked checkbox"
              checked={thirdFiveQuest} onChange={handleChange} /> Воскрешающий камень</label>
          </div>


          <div className="block_question">
            <p className='question'> 4/7 Сколько крестражей было у Волан-де-Морта?</p>
            {fourQuestionsList.map(i => (<>
              <label ><input type="radio" value={i.name} name="fourQuest" className="ui radio checkbox"
                checked={fourQuest === i.name} onChange={handleChange} /> {i.name}</label>
              <br></br> </>))}
          </div>

          <div className="block_question">
            <p className='question'> 5/7 Какой вид принимает патронус Гермионы?</p>
            <select className="ui dropdown"
              value={fiveQuest} name="fiveQuest"
              onChange={handleChange} >
              {fiveQuestionsList.map(i =>
                <option value={i.name}>{i.name}</option>)}
            </select>
          </div>

          <div className="block_question">
            <p className='question'> 6/7  Где состоялся последний разговор Гарри Поттера с Альбусом Дамблдором?</p>
            <select className="ui search dropdown"
              value={sixQuest} name="sixQuest"
              onChange={handleChange}>
              {sixQuestionsList.map(i =>
                <option value={i.name}>{i.name}</option>)}
            </select>
          </div>

          <div className="block_question">
            <p className='question'> 7/7 В каком году Дамблдор победил Гриндевальда?</p>
            <div className="ui input">
              <input type="text" placeholder="Напишите год" maxLength="4" className="field"
                name="sevenQuest" value={sevenQuest} onChange={handleChange} /></div>
          </div>
          {firstQuest === '' || secondQuest === '' || fourQuest === '' ||
            fiveQuest === '' || sixQuest === '' || sevenQuest === '' || thirdFirstQuest === '' || thirdSecondQuest === ''
            || thirdThirdQuest === '' || thirdFourQuest === '' ? (
              <div>
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                  Узнать результат!</button>
                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                        <p style={{ color: 'black' }}> Каждый не отвеченный ответ считается
             неправильным, Вы уверены что хотите продолжить?</p>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Отмена</button>
                        <HashRouter>
                          <NavLink to="/answer" class="btn btn-primary">Продолжить</NavLink>
                        </HashRouter>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <HashRouter>
                <NavLink to="/answer" className="btn btn-primary" exact>Узнать результат</NavLink>
              </HashRouter>
            )}
          <div className="reset">
            <input type="reset" value="Сброить все" class="btn btn-danger" />
          </div>
        </form>
      </div>
    )
  }
}
export default Questions
