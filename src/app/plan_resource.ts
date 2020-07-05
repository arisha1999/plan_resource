import {Component} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

/**
 * @title Drag&Drop sorting
 */

export interface Dates{
  Year:string;
  Month:string;
  Day:string;
}

export interface dataset{
  projects_data:Project;
  calendar_data:dates_c[];
}

export interface dates_c{
  date:string;
}

export interface calendar{
  year:string;
  month:string;
  day:string;
  plan:plan[];
}

export interface employee{
  Employee_id:number;
  text:string;
}

export interface plan{
  Project_id:number;
  Workers:Worker[];
}

export interface Worker{
  Employee_id:number;
  Date_from:string;
  Date_to:string;
  Occupation:number;
  Color:string;
}

export interface Project{
  Project_id:number;
  text:string;
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];


const DATA_EMPLOYEES: employee[]=[
            {Employee_id:0,text:"Сотрудник 1"},
            {Employee_id:1,text:"Сотрудник 2"},
            {Employee_id:2,text:"Сотрудник 3"},
            {Employee_id:3,text:"Сотрудник 4"},
            {Employee_id:4,text:"Сотрудник 5"},
            {Employee_id:5,text:"Сотрудник 6"},
            {Employee_id:6,text:"Сотрудник 7"},
            {Employee_id:7,text:"Сотрудник 8"},
            {Employee_id:8,text:"Сотрудник 9"},
            {Employee_id:9,text:"Сотрудник 10"},
            {Employee_id:10,text:"Сотрудник 11"},
            {Employee_id:11,text:"Сотрудник 12"},
            {Employee_id:12,text:"Сотрудник 13"},
            {Employee_id:13,text:"Сотрудник 14"},
            {Employee_id:14,text:"Сотрудник 15"},
            {Employee_id:15,text:"Сотрудник 16"},
            {Employee_id:16,text:"Сотрудник 17"},
            {Employee_id:17,text:"Сотрудник 18"},
            {Employee_id:18,text:"Сотрудник 19"},
            {Employee_id:19,text:"Сотрудник 20"},
            {Employee_id:20,text:"Сотрудник 21"},
            {Employee_id:21,text:"Сотрудник 22"},
            {Employee_id:22,text:"Сотрудник 23"},
            {Employee_id:23,text:"Сотрудник 24"},
            {Employee_id:24,text:"Сотрудник 25"},
            {Employee_id:25,text:"Сотрудник 26"},
            {Employee_id:26,text:"Сотрудник 27"},
            {Employee_id:27,text:"Сотрудник 28"},
            {Employee_id:28,text:"Сотрудник 29"},
            {Employee_id:29,text:"Сотрудник 30"},
            {Employee_id:30,text:"Сотрудник 31"},
            {Employee_id:31,text:"Сотрудник 32"},
            {Employee_id:32,text:"Сотрудник 33"},
            {Employee_id:33,text:"Сотрудник 34"},
            {Employee_id:34,text:"Сотрудник 35"},
            {Employee_id:35,text:"Сотрудник 36"},
            {Employee_id:36,text:"Сотрудник 37"},
            {Employee_id:37,text:"Сотрудник 38"},
            {Employee_id:38,text:"Сотрудник 39"},
            {Employee_id:39,text:"Сотрудник 40"},
            {Employee_id:40,text:"Сотрудник 41"},
            {Employee_id:41,text:"Сотрудник 42"},
            {Employee_id:42,text:"Сотрудник 43"},
            {Employee_id:43,text:"Сотрудник 44"},
            {Employee_id:44,text:"Сотрудник 45"},
            {Employee_id:45,text:"Сотрудник 46"},
            {Employee_id:46,text:"Сотрудник 47"},
            {Employee_id:47,text:"Сотрудник 48"},
            {Employee_id:48,text:"Сотрудник 49"}
        ];


@Component({
  selector: 'plan_resource',
  templateUrl: 'plan_resource.html',
  styleUrls: ['plan_resource.css'],
})
export class CdkDragDropSortingExample {
  displayedColumns: string[] = ['name', 'weight', 'symbol', 'position'];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  data: PeriodicElement[] = ELEMENT_DATA;
  
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
        employees:employee[]= DATA_EMPLOYEES;
        error="";
        error_add = " ";
        dates=[{date:""},{date:""}];
        calendar:Dates[] = [];
        new_calendar:plan[];
        projects : Project[]= [
            {Project_id:0,text:"Проект1"},
            {Project_id:1,text:"Проект2"},
            {Project_id:2,text:"Проект3"},
            {Project_id:3,text:"Проект4"},
            {Project_id:4,text:"Проект5"}
        ];
        action="add_employee()";
        projects_ = [{Project_id: 0, text: ""}];
        plan:plan[]=[
            {Project_id:0, Workers:[{Employee_id:0,Date_from:"2020-06-01",Date_to:"2020-06-03",Occupation:25,Color:"#FFF"},{Employee_id:1,Date_from:"2020-06-01",Date_to:"2020-06-03",Occupation:25,Color:"#FFF"}]},
            {Project_id:1, Workers:[{Employee_id:2,Date_from:"2020-06-04",Date_to:"2020-06-06",Occupation:25,Color:"#FFF"},{Employee_id:3,Date_from:"2020-06-01",Date_to:"2020-06-03",Occupation:25,Color:"#FFF"}]},
            ];
        //обновление таблицы с планом
        update(){
            this.dataSource=[]
            this.new_calendar=[];
            this.dates[0].date = (<HTMLInputElement>document.getElementById('date_from')).value;
            this.dates[1].date = (<HTMLInputElement>document.getElementById('date_to')).value;
            if(new Date(this.dates[0].date)>=new Date(this.dates[1].date)){
                this.error = " Измените даты на верные!";
                this.projects_ = [];
                (<HTMLInputElement>document.getElementById('add_project')).setAttribute('class','add_project off');
            }
            else if(this.dates[0].date&&this.dates[1].date){
                this.error = "";
                this.between_dates();
                this.build_table();
            }
        };
        //создание листа с датами между введенными датами
        between_dates() {
            this.calendar = [];
            var days_from = new Date(this.dates[0].date).getDate();
            var days_to = new Date(this.dates[1].date).getDate();
            var month_from = new Date(this.dates[0].date).getMonth();
            var month_to = new Date(this.dates[1].date).getMonth();
            var year_from = new Date(this.dates[0].date).getFullYear();
            var year_to = new Date(this.dates[1].date).getFullYear();
            var days_in_month=1, month = 11;
            var count_days=0, count_month =0, count_year=0;
            for(var i = year_from;i<=year_to;i++){
                if(year_to==year_from){
                    month = month_to;
                }
                else if(i==year_to){
                    month_from=0;
                    month= month_to;
                }
                else {
                    month = 11;
                }
                for(var j = month_from;j<=month;j++){
                    if(month_from==month_to&&year_from==year_to){
                        days_in_month = days_to;
                    }
                    else if(j==month_to&&i==year_to){
                        days_in_month = days_to;
                        days_from=1;
                    }
                    else {
                        days_in_month = 32 - new Date(i,j,32).getDate();
                    }
                    for(var k = days_from;k<=days_in_month;k++){
                        var t = j +1;
                        this.calendar.push({"Year":String(i),"Month":String(t),"Day":String(k)});
                    }
                    days_from=1;
                }
                month_from=0;
            }
        };
        //выбор данных для построения таблицы
        build_table() {
            this.error = "";
            this.new_calendar = [];
            this.projects_= this.projects;
            var date_from = new Date(this.dates[0].date);
            var date_to = new Date(this.dates[1].date);
            this.new_calendar.slice(0,1);
            //обходим всю базу и ищем данных за введенный промежуток времени
            for(var i = 0; i < this.plan.length;i++){
                for(var j = 0; j < this.plan[i].Workers.length;j++){
                    var date_from_cal = new Date(this.plan[i].Workers[j].Date_from);
                    var date_to_cal = new Date(this.plan[i].Workers[j].Date_to);
                    //подходит ли по временному промежутку
                    if(date_from_cal>=date_from && date_to_cal<=date_to){
                        var project_id = this.plan[i].Project_id;
                        //проверяем на наличие проекта в базе
                        if(this.new_calendar.some(e=>e.Project_id===project_id)){
                            this.new_calendar[i].Workers.push(this.plan[i].Workers[j]);
                        }
                        else {
                            this.new_calendar.push({Project_id:this.plan[i].Project_id, Workers:[this.plan[i].Workers[j]]});
                        }
                    }
                }
            }
            //если нет данных по введенному промежутку в базе
            if(this.new_calendar.length==0){
                this.error = "Данных за введенный промежуток нет!";
                this.calendar = [];
                this.projects_= [];
                (<HTMLInputElement>document.getElementById('add_project')).setAttribute('class','add_project off');
            }
            else{
                (<HTMLInputElement>document.getElementById('add_project')).setAttribute('class','add_project');
                this.build_data_source();
            }
        };

        build_data_source(){
            var header= {Project_id:0,text:"Проекты/Даты"};
            var dates : dates_c[]=[];
            this.displayedColumns.push(header.text);
            for(var i = 0; i < this.projects.length;i++){
              dates.push({date:this.projects[i].text});
            }
            this.dataSource.push({projects_data:header,calendar_data:dates});
            for(var i = 0; i < this.calendar.length;i++){
              dates=[];
              var date_ = this.calendar[i].Year+"/"+this.calendar[i].Month+"/"+this.calendar[i].Day;
              this.displayedColumns.push(date_);
              for(var j = 0; j < this.projects.length;j++){
                dates.push({date:"LOL"});
              }
              this.dataSource.push({projects_data:header,calendar_data:dates});
            }
            alert("LOL");
        };

        //добавление нового сотрудника
        add_employee() {
            var new_employee = (<HTMLInputElement>document.getElementById('new_record')).value;
            if(this.employees.some(e=>e.text==new_employee)){
                this.error_add="Работник с таким именем уже существует";
            }
            else {
                this.employees.push({Employee_id:this.employees.length,text:new_employee});
                this.close_window('add_employee');
            }
        };

        //удаление существующего работника
        delete_employee(employee_id:number) {
            if(this.plan.some(e=>e.Workers.some(e=>e.Employee_id==employee_id))){
                if (confirm("У данного работника есть планы в календаре. Вы уверены, что хотите его уволить?")) {
                    this.employees.splice(employee_id,1);
                    for(var i = 0; i < this.plan.length;i++){
                      var worker_index = this.plan[i].Workers.find(worker=> worker.Employee_id == employee_id);
                      if(worker_index){
                        this.plan[i].Workers.splice(worker_index,1);
                      }
                    }
                }
            }
            else {
                this.employees.splice(employee_id,1);
            }
        };

        //изменение имени сотрудника
        change_employee(employee_id:number){
            var new_employee = (<HTMLInputElement>document.getElementById('new_record')).value;
            if(this.employees.some(e=>e.text==new_employee)){
                this.error_add="Работник с таким именем уже существует";
            }
            else {
                this.employees[employee_id].text = new_employee;
                this.close_window('add_employee');
            }
        };

        //открытие окна
        open_window(window_id:string,action:string,label:string,button:string){
          if(window_id!="modal"){
            (<HTMLInputElement>document.getElementById('label_new_record')).innerText = label;
            (<HTMLInputElement>document.getElementById('add_record_button')).setAttribute('click',"close_window('add_new_record')");
            (<HTMLInputElement>document.getElementById('add_record_button')).innerText = button;
            // (<HTMLInputElement>document.getElementById('add_employee_button')).addEventListener("click",'add_employee()');
          }
          (<HTMLInputElement>document.getElementById(window_id)).setAttribute('display','block');
          (<HTMLInputElement>document.getElementById(window_id)).setAttribute('class','modal');
        };

        //закрытие окна
        close_window(window_id:string){
          (<HTMLInputElement>document.getElementById(window_id)).setAttribute('display','none');
          (<HTMLInputElement>document.getElementById(window_id)).setAttribute('class','modal off');
          (<HTMLInputElement>document.getElementById('new_record')).value = "";
          this.error_add=" ";
        };

        //добавление проекта
        add_project(){
            var new_project = (<HTMLInputElement>document.getElementById('new_record')).value;
            if(this.projects.some(e=>e.text==new_project)){
                this.error_add="Проект с таким именем уже существует";
            }
            else {
                this.projects.push({Project_id:this.projects.length,text:new_project});
                this.close_window('add_project_modal');
            }
        };

        //удаление проекта
        this(project_id:number) {
            if(this.plan.some(e=>e.Project_id==project_id)){
                if (confirm("В данной проекте задействованы люди. Вы уверены, что хотите его удалить данный проект из плана?")) {
                    this.projects.splice(project_id,1);
                    var project_index = this.plan.findIndex(project_ => project_.Project_id==project_id);
                    this.plan.splice(project_index,1);
                }
            }
            else {
                this.projects.splice(project_id,1);
            }
        };

        //изменение проекта
        change_project(project_id:number) {
            var new_project = (<HTMLInputElement>document.getElementById('new_')).value;
            if(this.projects.some(e=>e.text==new_project)){
                this.error_add="Работник с таким именем уже существует";
            }
            else {
                this.projects[project_id].text=new_project;
                this.close_window('add_project_modal');
            }
        };

        //добавление записи в таблицу
        add_to_plan(project_id:number,worker_id:number,date_from:string,date_to:string,Ocupation:number){
            var project_index = this.plan.findIndex(project_ => project_.Project_id==project_id);
            var worker_index = this.plan[project_index].Workers.find(worker=> worker.Employee_id == worker_id);
            if(worker_index){
              alert("Данный работник уже занимается данным проектом!");
            }
            else {
              this.plan[project_index].Workers.push({Employee_id:worker_id,Date_from:date_from,Date_to:date_to,Occupation:Ocupation,Color:'#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6)});
            }
        };

        //удаление записи из таблицы
        delete_from_plan(project_id:number,worker_id:number){
            if (confirm("Вы уверены, что хотите его удалить данную запись из плана?")) {
                var project_index = this.plan.findIndex(project_ => project_.Project_id==project_id);
                var worker_index = this.plan[project_index].Workers.find(worker=> worker.Employee_id == worker_id);
                this.plan[project_index].Workers.splice(worker_id,1);
            }
        };

        //редактирование записи в таблице
        change_plan(worker_id:number, project_id:number,date_from:string,date_to:string,Ocupation:number){
            var project_index = this.plan.findIndex(project_ => project_.Project_id==project_id);
            var worker_index = this.plan[project_index].Workers.find(worker=> worker.Employee_id == worker_id);
            if(worker_index){
            this.plan[project_index].Workers[worker_index] ={Employee_id:worker_id,Date_from:date_from,Date_to:date_to,Occupation:Ocupation,Color:this.plan[project_index].Workers[worker_index].Color};
            }
        };

        // event вставка новой записи сотрудника
        drop_employee(event: CdkDragDrop<string[]>){
            if(true){
              var date= new Date();
              var new_date = new Date();
              new_date.setDate(date.getDate()+7);
              this.add_to_plan(1,2,date.toDateString(),new_date.toDateString(),100);
            }
        };

        // event передвижения по таблице
        drop_on_table(event: CdkDragDrop<any>) {
          if (event.previousContainer === event.container) {
            //передвижение по строке
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
          } else {
            //передвижение между строками
            transferArrayItem(event.previousContainer.data,
              event.container.data,
              event.previousIndex,
              event.currentIndex);

          }
        };
        
        // event изменение записи сотрудника
        //открываем просто окно modal 

        // event выход за границы таблицы
        drop_delete(event: CdkDragDrop<string[]>) {
            if (event.previousContainer != event.container) {
              //this.delete_from_plan();
            }
        };


        
}

/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */