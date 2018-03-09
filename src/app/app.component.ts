import { Component } from '@angular/core';
import { ServerService } from 'app/server.service';
import { Response } from '@angular/http';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private serverService : ServerService){}
  ngOnInit(){
    this.onGetServers();
  }
  servers : any[];
  // servers = [
  //   {
  //     name: 'Testserver',
  //     capacity: 10,
  //     id: this.generateId()
  //   },
  //   {
  //     name: 'Liveserver',
  //     capacity: 100,
  //     id: this.generateId()
  //   }
  // ];

  // onGetServers(){
  //   this.serverService.getServers()
  //     .subscribe(
  //       (response:Response)=>{
  //         const data = response.json();
  //         console.log(data);
  //       },
  //       (error:Error)=>{console.log(error)}
  //     )
  // }
  onGetServers(){
    this.serverService.getServers()
      .subscribe(
        (servers:any[])=>{this.servers = servers; console.log(servers)},
        (error:Error)=>{console.log(error)}
      )
  }
  onSaveServer(){
    this.serverService.storeServers(this.servers)
      .subscribe(
        (response:Response)=>console.log(response),
        (error:Error)=>console.log(error)
      );
  }
  onAddServer(name: string) {
    this.servers.push({
      name: name,
      capacity: 50,
      id: this.generateId()
    });
  }
  private generateId() {
    return Math.round(Math.random() * 10000);
  }
}
