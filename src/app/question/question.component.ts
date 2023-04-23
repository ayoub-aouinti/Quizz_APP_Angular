import { QuestionService } from './../service/question.service';
import { Component, OnInit } from '@angular/core';

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
  constructor(private QuestionService : QuestionService) { }

  ngOnInit(): void {
    this.name = localStorage.getItem("name")!;
    this.getAllQuestions();
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

}
