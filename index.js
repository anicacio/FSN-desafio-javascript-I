// Base a ser utilizada
const alunosDaEscola = [{
    nome: "Henrique",
    notas: [],
    cursos: [],
    faltas: 5
}, {
    nome: "Edson",
    notas: [],
    cursos: [],
    faltas: 2
}, {
    nome: "Bruno",
    notas: [10, 9.8, 9.6],
    cursos: [],
    faltas: 0
}, {
    nome: "Guilherme",
    notas: [1, 5, 6], // Alterado o Guilherme para ter nota baixa para teste!!!! 
    cursos: [{
        nomeDoCurso: "Full Stack",
        dataMatricula: new Date
    }],
    faltas: 0
}, {
    nome: "Carlos",
    notas: [],
    cursos: [],
    faltas: 0
}, {
    nome: "Lucca",
    notas: [10, 9.8, 9.6],
    cursos: [{
        nomeDoCurso: "UX",
        dataMatricula: new Date
    }],
    faltas: 0
}];

// implementação

const adicionarAluno = (nome) => {

    /*Essa função irá receber uma *string* que é nome do aluno a ser criado. 
    E seguindo o modelo de aluno, o mesmo deverá ser inserido na lista de alunos.
    A função deve devolver um feedback de sucesso, caso o aluno seja inserido corretamente.*/

    alunosDaEscola.push({
        nome: nome,
        notas: [],
        cursos: [],
        faltas: 0
    });

    console.log(`${nome} adicionado a lista de aluno com sucesso!`)
};

const listarAlunos = () => {
    /*Com essa função o usuário poderá ver todos os alunos cadastrados atualmente no sistema. 
    Vale dizer que As informações deverão ser exibidas em um formato amigável.*/

    for (aluno of alunosDaEscola) {
        console.log(`Nome: ${aluno.nome} \nNotas: ${aluno.notas} \nFaltas: ${aluno.faltas}`);
        if (aluno.cursos.length > 0) {
            for (curso of aluno.cursos) {
                console.log(`    Curso: ${curso.nomeDoCurso}\n    Data de Matricula: ${curso.dataMatricula}`)
            }
        } else {
            console.log(`   Aluno não matriculado em nenhum curso.`)
        }
        console.log(`---------------------------------------------------------------------`)
    }

};

const buscarAluno = (nome) => {

    /* Por meio dessa função, podemos pesquisar um aluno por nome na lista de aluno. Ela deverá exibir um feedback, tanto para quando encontrar o aluno, tanto quando não encontrar. E deverá devolver um aluno em seu retorno. */

    let alunoExistente = alunosDaEscola.filter(aluno => (aluno.nome == nome));
    if (alunoExistente.length != 0) {
        console.log("Aluno encontrado");
        return alunoExistente[0];
    } else {
        console.log("Aluno não encontrado");
        return false;
    };
};

const buscarAlunoInterna = (nome) => {
    let alunoExistente = alunosDaEscola.filter(aluno => (aluno.nome == nome));
    if (alunoExistente.length != 0) {
        return alunoExistente[0]
    } else {
        return false;
    }
};

const matricularAluno = (aluno, curso) => {
    /* Essa funcionalidade irá permitir, cadastrar um aluno em um curso. 
    Essa função só poderá ser executada em um aluno já devidamente cadastrado no sistema, e deverá armazenar a data atual no momento da matricula
    Lembre-se de exibir o feedback para o usuário. */
    let alunoExistente = buscarAlunoInterna(aluno.nome);
    if (alunoExistente) {
        alunoExistente.cursos.push({
            nomeDoCurso: curso,
            dataMatricula: new Date
        });
        console.log(`${alunoExistente.nome} matriculado com sucesso no curso ${curso}!`);
    } else {
        console.log("Aluno não encontrado!");
    };
};

const aplicarFalta = (aluno) => {
    /*
     Ao receber um aluno devidamente cadastrado em nossa lista. Você deverá incrementar uma falta ao aluno. Você deverá dar um feedback ao concluir a tarefa. Só poderá aplicar falta em aluno se o mesmo tiver matriculado em um curso.
    */
    let alunoExistente = buscarAlunoInterna(aluno.nome);
    if (alunoExistente) {
        if (alunoExistente.cursos.length > 0) {
            alunoExistente.faltas++
            console.log(`Falta aplicada para ${alunoExistente.nome}, total de faltas: ${alunoExistente.faltas}`);
        } else {
            console.log("Aluno não matriculado em nenhum curso!");
        }
    } else {
        console.log("Aluno não encontrado!");
    };
};

const aplicarNota = (aluno, nota) => {
    /*
     Ao receber um aluno devidamente cadastrado em nossa lista. Você deverá adicionar uma nota ao aluno na sua lista de notas. Você deverá dar um feedback ao concluir a tarefa. Só poderá aplicar nota em aluno se o mesmo tiver matriculado em um curso.
    */
    // Adicionado parametro nota, pois é necessário!!!!

    let alunoExistente = buscarAlunoInterna(aluno.nome);
    if (alunoExistente) {
        if (alunoExistente.cursos.length > 0) {
            alunoExistente.notas.push(nota)
            console.log(`Nota adicionada para o aluno ${alunoExistente.nome}`);
        } else {
            console.log("Aluno não matriculado em nenhum curso!");
        }
    } else {
        console.log("Aluno não encontrado!");
    };

};

const aprovarAluno = (aluno) => {
    /* 
    Ao receber um aluno devidamente cadastrado em nossa lista, deverá dizer se o mesmo está aprovado ou não. Os critérios de aprovação são: ter no máximo 3 faltas e média 7 em notas.
    Só o aluno só poderá ser aprovado se o mesmo tiver matriculado em um curso.
    */

    let alunoExistente = buscarAlunoInterna(aluno.nome);
    if (alunoExistente) {
        if (alunoExistente.cursos.length > 0) {
            const calcularMedia = () => {
                let soma = alunoExistente.notas.reduce((pilha, nota) => {
                    return pilha + nota;
                });
                return (soma / alunoExistente.notas.length);
            };
            console.log(`Aluno ${alunoExistente.nome} está ${(calcularMedia() >= 7 && alunoExistente.faltas <= 3) ? "Aprovado!" : "Reprovado!"}`);
        } else {
            console.log("Aluno não matriculado em nenhum curso!");
        }
    } else {
        console.log("Aluno não encontrado!");
    };
};


// AREA DE TESTES

// adicionarAluno("Anderson Nicácio");

// matricularAluno(buscarAlunoInterna("Lucca"),"Full Stack"); // Aluno cadastrado
// matricularAluno(buscarAlunoInterna("Anderson"),"Full Stack"); // Aluno não cadastrado

// buscarAluno("Lucca"); // Aluno cadastrado
// buscarAluno("Anderson"); // Aluno não cadastrado

// aplicarFalta(buscarAlunoInterna("Carlos")); // Aluno sem curso
// aplicarFalta(buscarAlunoInterna("Lucca")); // Aluno com curso
// aplicarFalta(buscarAlunoInterna("Anderson")); // Aluno não cadastrado

// listarAlunos();

// aplicarNota(buscarAlunoInterna("Carlos",5)); // Aluno sem curso
// aplicarNota(buscarAlunoInterna("Lucca",5)); // Aluno com curso
// aplicarNota(buscarAlunoInterna("Anderson",5)); // Aluno não cadastrado

aprovarAluno(buscarAlunoInterna("Guilherme")); // Aluno sem curso
aprovarAluno(buscarAlunoInterna("Lucca")); // Aluno com curso
aprovarAluno(buscarAlunoInterna("Anderson")); // Aluno não cadastrado