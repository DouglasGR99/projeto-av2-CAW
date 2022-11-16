function limpaCampo(campo) {
    if(campo == 1) {
        document.getElementById("nome").value= "";
    }        
    if(campo == 2) {
        document.getElementById("data").value= "";
    }        
    if(campo == 3) {
        document.getElementById("hora").value= "";
    }        
}   //Limpa o campo caso o usuario clique no espaço a ser preenchido

function dataN() {

    const nome = document.getElementById("nome").value;     //Nome do usuário
    const calend = document.getElementById("data").value;    //dia fornecido
    const hora = document.getElementById("hora").value;     //hora fornecida
    let signo;
    let astro;
    let momento;
    let ascend;

    //inicio de cada signo
    const iniAri = ('2022-03-21');
    const iniTou = ('2022-04-21');
    const iniGem = ('2022-05-21');
    const iniCan = ('2022-06-21');
    const iniLeo = ('2022-07-22');
    const iniVir = ('2022-08-23');
    const iniLib = ('2022-09-23');
    const iniEsc = ('2022-10-23');
    const iniSag = ('2022-11-22');
    const iniCap = ('2022-12-22');
    const iniAqu = ('2022-01-21');
    const iniPei = ('2022-02-20');
    //Inicio e fim do ano (feito para corrigir erros de capricornio)
    const iniAno = ('2022-01-01');
    const fimAno = ('2022-12-31');

    //inicio de cada horario
    const hora1 = ('06:00');
    const hora2 = ('08:00');
    const hora3 = ('10:00');
    const hora4 = ('12:00');
    const hora5 = ('14:00');
    const hora6 = ('16:00');
    const hora7 = ('18:00');
    const hora8 = ('20:00');
    const hora9 = ('22:00');
    const hora10 = ('00:00');
    const hora11 = ('02:00');
    const hora12 = ('04:00');
    //o caso final
    const horaFinal = ('23:59')
    document.getElementById("retornadoDH").innerHTML = "<p>Data: "+calend+". Hora: "+hora+"<p>";


    //Calculando signo
    if ((calend>=iniAri)&&(calend<iniTou)) {
        const aries = 'áries';
        astro = 'Marte';
        signo=aries;
    }    //aries
    else {
        if ((calend>=iniTou)&&(calend<iniGem)) {
            const touro = 'touro';
            astro = 'Vênus';
            signo=touro;
        }    //touro
        else {
            if ((calend>=iniGem)&&(calend<iniCan)) {
                const gemeos = 'gêmeos';
                astro = 'Mercúrio';
                signo=gemeos;
            }    //gemeos
            else {
                if ((calend>=iniCan)&&(calend<iniLeo)) {
                    const cancer = 'câncer';
                    astro = 'a Lua';
                    signo=cancer;
                }    //cancer
                else {
                    if ((calend>=iniLeo)&&(calend<iniVir)) {
                        const leao = 'leão';
                        astro = 'o Sol';
                        signo=leao;
                    }    //leao
                    else {
                        if ((calend>=iniVir)&&(calend<iniLib)) {
                            const virgem = 'virgem';
                            astro = 'Mercúrio';
                            signo=virgem;
                        }    //virgem
                        else {
                            if ((calend>=iniLib)&&(calend<iniEsc)) {
                                const libra = 'libra';
                                astro = 'Vênus';
                                signo=libra;
                            }    //libra
                            else {
                                if ((calend>=iniEsc)&&(calend<iniSag)) {
                                    const escorpiao = 'escorpião';
                                    astro = 'Marte';
                                    signo=escorpiao;
                                }    //escorpiao
                                else {
                                    if ((calend>=iniSag)&&(calend<iniCap)) {
                                        const sagitario = 'sagitário';
                                        astro = 'Júpiter';
                                        signo=sagitario;
                                    }    //sagitario
                                    else {
                                        if ((calend>=iniCap)&&(calend<=fimAno)) {
                                            const capricornio = 'capricórnio';
                                            astro = 'Saturno';
                                            signo=capricornio;
                                        }
                                        if ((calend>=iniAno)&&(calend<iniAqu)) {
                                            const capricornio = 'capricórnio';
                                            astro = 'Saturno';
                                            signo=capricornio;
                                        }    //capricornio (do final e começo do ano)
                                        else {
                                            if ((calend>=iniAqu)&&(calend<iniPei)) {
                                                const aquario = 'aquário';
                                                astro = 'Urano';
                                                signo=aquario;
                                            }    //aquario
                                            else {
                                                if ((calend>=iniPei)&&(calend<iniAri)) {
                                                    const peixes = 'peixes';
                                                    astro = 'Netuno';
                                                    signo=peixes;
                                                }    //peixes
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    //calculando momento do dia
    if ((hora>=hora1)&&(hora<hora2)) {
        momento = 1;
    } else {
        if ((hora>=hora2)&&(hora<hora3)) {
            momento = 2;
        } else {
            if ((hora>=hora3)&&(hora<hora4)) {
                momento = 3;
            } else {
                if ((hora>=hora4)&&(hora<hora5)) {
                    momento = 4;
                } else {
                    if ((hora>=hora5)&&(hora<hora6)) {
                        momento = 5;
                    } else {
                        if ((hora>=hora6)&&(hora<hora7)) {
                            momento = 6;
                        } else {
                            if ((hora>=hora7)&&(hora<hora8)) {
                                momento = 7;
                            } else {
                                if ((hora>=hora8)&&(hora<hora9)) {
                                    momento = 8;
                                } else {
                                    if ((hora>=hora9)&&(hora<horaFinal)) {
                                        momento = 9;
                                    } else {
                                        if ((hora>=hora10)&&(hora<hora11)) {
                                            momento = 10;
                                        } else {
                                            if ((hora>=hora11)&&(hora<hora12)) {
                                                momento = 11;
                                            } else {
                                                if ((hora>=hora12)&&(hora<hora1)) {
                                                    momento = 12;
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    //calculando ascendente
    if (signo == 'áries') {
        switch (momento) {
            case 1: ascend = 'áries';break;
            case 2: ascend = 'touro';break;
            case 3: ascend = 'gêmeos';break;
            case 4: ascend = 'câncer';break;
            case 5: ascend = 'leão';break;
            case 6: ascend = 'virgem';break;
            case 7: ascend = 'libra';break;
            case 8: ascend = 'escorpião';break;
            case 9: ascend = 'sagitário';break;
            case 10: ascend = 'capricórnio';break;
            case 11: ascend = 'aquário';break;
            case 12: ascend = 'peixes';break;
        }
    } else {
        if (signo == 'touro') {
            switch (momento) {
                case 12: ascend = 'áries';break;
                case 1: ascend = 'touro';break;
                case 2: ascend = 'gêmeos';break;
                case 3: ascend = 'câncer';break;
                case 4: ascend = 'leão';break;
                case 5: ascend = 'virgem';break;
                case 6: ascend = 'libra';break;
                case 7: ascend = 'escorpião';break;
                case 8: ascend = 'sagitário';break;
                case 9: ascend = 'capricórnio';break;
                case 10: ascend = 'aquário';break;
                case 11: ascend = 'peixes';break;
            }
        } else {
            if (signo == 'gêmeos') {
                switch (momento) {
                    case 11: ascend = 'áries';break;
                    case 12: ascend = 'touro';break;
                    case 1: ascend = 'gêmeos';break;
                    case 2: ascend = 'câncer';break;
                    case 3: ascend = 'leão';break;
                    case 4: ascend = 'virgem';break;
                    case 5: ascend = 'libra';break;
                    case 6: ascend = 'escorpião';break;
                    case 7: ascend = 'sagitário';break;
                    case 8: ascend = 'capricórnio';break;
                    case 9: ascend = 'aquário';break;
                    case 10: ascend = 'peixes';break;
                }
            } else {
                if (signo == 'câncer') {
                    switch (momento) {
                        case 10: ascend = 'áries';break;
                        case 11: ascend = 'touro';break;
                        case 12: ascend = 'gêmeos';break;
                        case 1: ascend = 'câncer';break;
                        case 2: ascend = 'leão';break;
                        case 3: ascend = 'virgem';break;
                        case 4: ascend = 'libra';break;
                        case 5: ascend = 'escorpião';break;
                        case 6: ascend = 'sagitário';break;
                        case 7: ascend = 'capricórnio';break;
                        case 8: ascend = 'aquário';break;
                        case 9: ascend = 'peixes';break;
                    }
                } else {
                    if (signo == 'leão') {
                        switch (momento) {
                            case 9: ascend = 'áries';break;
                            case 10: ascend = 'touro';break;
                            case 11: ascend = 'gêmeos';break;
                            case 12: ascend = 'câncer';break;
                            case 1: ascend = 'leão';break;
                            case 2: ascend = 'virgem';break;
                            case 3: ascend = 'libra';break;
                            case 4: ascend = 'escorpião';break;
                            case 5: ascend = 'sagitário';break;
                            case 6: ascend = 'capricórnio';break;
                            case 7: ascend = 'aquário';break;
                            case 8: ascend = 'peixes';break;
                        }
                    } else {
                        if (signo == 'virgem') {
                            switch (momento) {
                                case 8: ascend = 'áries';break;
                                case 9: ascend = 'touro';break;
                                case 10: ascend = 'gêmeos';break;
                                case 11: ascend = 'câncer';break;
                                case 12: ascend = 'leão';break;
                                case 1: ascend = 'virgem';break;
                                case 2: ascend = 'libra';break;
                                case 3: ascend = 'escorpião';break;
                                case 4: ascend = 'sagitário';break;
                                case 5: ascend = 'capricórnio';break;
                                case 6: ascend = 'aquário';break;
                                case 7: ascend = 'peixes';break;
                            }
                        } else {
                            if (signo == 'libra') {
                                switch (momento) {
                                    case 7: ascend = 'áries';break;
                                    case 8: ascend = 'touro';break;
                                    case 9: ascend = 'gêmeos';break;
                                    case 10: ascend = 'câncer';break;
                                    case 11: ascend = 'leão';break;
                                    case 12: ascend = 'virgem';break;
                                    case 1: ascend = 'libra';break;
                                    case 2: ascend = 'escorpião';break;
                                    case 3: ascend = 'sagitário';break;
                                    case 4: ascend = 'capricórnio';break;
                                    case 5: ascend = 'aquário';break;
                                    case 6: ascend = 'peixes';break;
                                }
                            } else {
                                if (signo == 'escorpião') {
                                    switch (momento) {
                                        case 6: ascend = 'áries';break;
                                        case 7: ascend = 'touro';break;
                                        case 8: ascend = 'gêmeos';break;
                                        case 9: ascend = 'câncer';break;
                                        case 10: ascend = 'leão';break;
                                        case 11: ascend = 'virgem';break;
                                        case 12: ascend = 'libra';break;
                                        case 1: ascend = 'escorpião';break;
                                        case 2: ascend = 'sagitário';break;
                                        case 3: ascend = 'capricórnio';break;
                                        case 4: ascend = 'aquário';break;
                                        case 5: ascend = 'peixes';break;
                                    }
                                } else {
                                    if (signo == 'sagitário') {
                                        switch (momento) {
                                            case 5: ascend = 'áries';break;
                                            case 6: ascend = 'touro';break;
                                            case 7: ascend = 'gêmeos';break;
                                            case 8: ascend = 'câncer';break;
                                            case 9: ascend = 'leão';break;
                                            case 10: ascend = 'virgem';break;
                                            case 11: ascend = 'libra';break;
                                            case 12: ascend = 'escorpião';break;
                                            case 1: ascend = 'sagitário';break;
                                            case 2: ascend = 'capricórnio';break;
                                            case 3: ascend = 'aquário';break;
                                            case 4: ascend = 'peixes';break;
                                        }
                                    } else {
                                        if (signo == 'capricórnio') {
                                            switch (momento) {
                                                case 4: ascend = 'áries';break;
                                                case 5: ascend = 'touro';break;
                                                case 6: ascend = 'gêmeos';break;
                                                case 7: ascend = 'câncer';break;
                                                case 8: ascend = 'leão';break;
                                                case 9: ascend = 'virgem';break;
                                                case 10: ascend = 'libra';break;
                                                case 11: ascend = 'escorpião';break;
                                                case 12: ascend = 'sagitário';break;
                                                case 1: ascend = 'capricórnio';break;
                                                case 2: ascend = 'aquário';break;
                                                case 3: ascend = 'peixes';break;
                                            }
                                        } else {
                                            if (signo == 'aquário') {
                                                switch (momento) {
                                                    case 3: ascend = 'áries';break;
                                                    case 4: ascend = 'touro';break;
                                                    case 5: ascend = 'gêmeos';break;
                                                    case 6: ascend = 'câncer';break;
                                                    case 7: ascend = 'leão';break;
                                                    case 8: ascend = 'virgem';break;
                                                    case 9: ascend = 'libra';break;
                                                    case 10: ascend = 'escorpião';break;
                                                    case 11: ascend = 'sagitário';break;
                                                    case 12: ascend = 'capricórnio';break;
                                                    case 1: ascend = 'aquário';break;
                                                    case 2: ascend = 'peixes';break;
                                                }
                                            } else {
                                                if (signo == 'peixes') {
                                                    switch (momento) {
                                                        case 2: ascend = 'áries';break;
                                                        case 3: ascend = 'touro';break;
                                                        case 4: ascend = 'gêmeos';break;
                                                        case 5: ascend = 'câncer';break;
                                                        case 6: ascend = 'leão';break;
                                                        case 7: ascend = 'virgem';break;
                                                        case 8: ascend = 'libra';break;
                                                        case 9: ascend = 'escorpião';break;
                                                        case 10: ascend = 'sagitário';break;
                                                        case 11: ascend = 'capricórnio';break;
                                                        case 12: ascend = 'aquário';break;
                                                        case 1: ascend = 'peixes';break;
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    document.getElementById("resultado").innerHTML = "<p>Olá, "+nome+"! Seu signo é "+signo+", seu ascendente é "+ascend+" e seu astro é "+astro+".<p>";
}   //calculadora de signo