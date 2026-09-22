(function(){
  // Public defense demo data. No personal data is used.
  const FLAG = "tl-defense-demo-v1";
  if(localStorage.getItem(FLAG)) return;

  const seed = {
    "tl-lab1-case01":{
      schemaVersion:"1.0",lab:"Lab 1",caseId:"CASE-01",lang:"ru",
      completed:true,selectedChoice:2,
      reflection:"Я понимаю общую логику трансверсальных компетенций и могу применить её к педагогической ситуации.",
      completedAt:new Date().toISOString()
    },
    "tl-lab2-case01":{
      schemaVersion:"1.1",lab:"Lab 2",caseId:"CASE-01",lang:"ru",
      completedAt:new Date().toISOString(),
      responses:{
        selectedFacts:[1,3,4],
        selectedDecision:2,
        decisionReason:"Сначала я хочу понять позиции участников и причины ситуации, а затем изменить организацию работы группы.",
        selectedDigital:2,
        digitalReason:"Электронная доска нужна только для того, чтобы сделать распределение ролей прозрачным и не заменяет живое обсуждение.",
        reflection:"В следующем действии я сначала уточню позиции участников, затем распределю роли и проверю, помогло ли это вернуть участие в работе."
      },
      evidence:{
        K1:{status:"captured",source:"system"},
        K6:{status:"captured",source:"system"},
        DL3:{status:"captured",source:"system"},
        K2:{status:"candidate",source:"expert_review"},
        K3:{status:"candidate",source:"expert_review"},
        SC1:{status:"candidate",source:"expert_review"},
        SC2:{status:"candidate",source:"expert_review"},
        SC3:{status:"candidate",source:"expert_review"},
        SC5:{status:"candidate",source:"expert_review"},
        RR6:{status:"candidate",source:"expert_review"},
        RR7:{status:"candidate",source:"expert_review"}
      }
    },
    "tl-lab3-case01":{
      schemaVersion:"1.0",lab:"Lab 3",caseId:"CASE-01",lang:"ru",
      completedAt:new Date().toISOString(),
      A:2,B:2,C:2,aReason:"Сначала выслушаю участника, затем уточню ситуацию и предложу совместное решение."
    },
    "tl-lab4-case01":{
      schemaVersion:"1.0",lab:"Lab 4",caseId:"CASE-01",lang:"ru",
      completedAt:new Date().toISOString(),
      picks:{1:2,2:2,3:2,4:2},
      reasons:[
        "Выбираю источник, потому что он соответствует учебной задаче и позволяет проверить происхождение информации.",
        "Проверяю автора, актуальность и согласованность сведений.",
        "Инструмент выбираю по возрасту детей и конкретной дидактической задаче.",
        "Ответ ИИ нельзя принимать без проверки: нужно проверить факты и соответствие возрасту."
      ]
    },
    "tl-lab5-case01":{
      schemaVersion:"1.0",lab:"Lab 5",caseId:"CASE-01",lang:"ru",
      completedAt:new Date().toISOString(),
      picks:{1:2,2:2,3:2,4:2,5:2}
    }
  };

  Object.entries(seed).forEach(([k,v])=>localStorage.setItem(k,JSON.stringify(v)));
  localStorage.setItem(FLAG,"1");
})();