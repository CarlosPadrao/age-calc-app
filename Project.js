import React from 'react';

function Project() {
    return (
        <main id='main'>
            <div className="container">
                <div className="project">
                    <div className="content">
                        <div className="form">
                            <form action="">
                                <div>
                                    <label htmlFor="">Day</label>
                                    <input type="number" name="day" id="day" />
                                </div>
                                <div>
                                    <label htmlFor="">Month</label>
                                    <input type="number" name="month" id="month" />
                                </div>
                                <div>
                                    <label htmlFor="">Year</label>
                                    <input type="number" name="year" id="year" />
                                </div>

                                <div className='submit'>
                                    <hr />
                                    <button type='button' id='subm' onClick={Fn}>Submit</button>
                                </div>
                            </form>
                        </div>
                        <div className="result">
                            <div className="result-y">
                                <span></span>
                                <label htmlFor="">years</label>
                            </div>
                            <div className="result-m">
                                <span>--</span>
                                <label htmlFor="">months</label>
                            </div>
                            <div className="result-d">
                                <span>--</span>
                                <label htmlFor="">days</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default Project;


const Fn = () => {
    let userDay = document.querySelector('#day').value;
    let userMonth = document.querySelector('#month').value;
    let userYear = document.querySelector('#year').value;

    if (!userDay) { 
        alert('Campo não preenchido!')
    } else {
        var d = new Date();
        var dia = d.getDay();
        var mes = d.getMonth() + 1;
        var ano = d.getFullYear();
        let totalDay = Math.abs(dia - userDay);
        let totalMonth = Math.abs(mes - userMonth);
        let totalYear = Math.abs(ano - userYear);
        console.log(totalDay, totalMonth, totalYear)
    }
}