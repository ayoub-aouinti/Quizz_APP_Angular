import { QuestionService } from './../service/question.service';
import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  public name : string="";
  public questionListe : any=[];
  public currentQuestion : number = 0;
  public points: number=0;
  counter=60;
  correctAnswer:number = 0;
  inCorrectAnswer:number = 0;
  interval$:any;
  progress:string="0";
  isQuizCompleted : boolean = false;
  constructor(private QuestionService : QuestionService) { }

  ngOnInit(): void {
    this.name = localStorage.getItem("name")!;
    this.getAllQuestions();
    this.startCounter();
  }

  getAllQuestions(){
    this.QuestionService.getQuestionJason()
    .subscribe(res=>{
      this.questionListe = res.questions
    })
  }

  nextQuestion(){
    this.currentQuestion++;
  }
  PreviousQuestion(){
    this.currentQuestion--;
  }

  answer(cuurentQno:number,option:any){
    if(cuurentQno === this.questionListe.length){
      this.isQuizCompleted = true;
      this.stopCounter();
    }
    if(option.correct){
      this.points+= 10;
      this.correctAnswer++;
      setTimeout(()=>{
      this.currentQuestion++;
      this.resetCounter();
      this.getProgressPercent();
      }, 1000)
    }else {
      setTimeout(()=>{
        this.currentQuestion++;
        this.inCorrectAnswer++;
        this.resetCounter();
        this.getProgressPercent();
        }, 1000)
      this.points-=10;
    }
  }
  startCounter(){
    this.interval$ = interval(1000)
    .subscribe(val=>{
      this.counter--;
      if(this.counter===0){
        this.currentQuestion++;
        this.counter=60;
        this.points-=10;
      }
    });
    setTimeout(() => {
      this.interval$.unsubscribe();
    }, 600000);
  }
  stopCounter(){
    this.interval$.unsubscribe();
    this.counter=0;
  }
  resetCounter(){
    this.stopCounter();
    this.counter=60;
    this.startCounter();
  }

  resetQuiz(){
    this.resetCounter();
    this.getAllQuestions();
    this.points=0;
    this.counter=60;
    this.currentQuestion=0;
    this.progress="0";
  }

  getProgressPercent(){
    this.progress = ((this.currentQuestion/this.questionListe.length)*100).toString();
    return this.progress;
  }

}
