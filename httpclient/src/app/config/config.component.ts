import { Component, OnInit } from '@angular/core';
import { ConfigService } from './config.service';
import { Config } from './config';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {
  config: Config
  headers: string[];
  error: any;

  constructor(private configService: ConfigService) {
  }

  ngOnInit() {
    // this.showConfig();
    this.showConfigResponse();
  }

  showConfig() {
    this.configService.getConfig()
      .subscribe(
        (data: Config) => this.config = { ...data },
        error => this.error = error // error path
      );
      console.log(this.config);
  }

  showConfigResponse() {
    this.configService.getConfigResponse()
      // resp is of type `HttpResponse<Config>`
      .subscribe(resp => {
        console.log("got response");
        // display its headers
        const keys = resp.headers.keys();
        console.log(keys);
        this.headers = keys.map(key =>
          `${key}: ${resp.headers.get(key)}`);
  
        // access the body directly, which is typed as `Config`.
        this.config = { ... resp.body };
      });
  }
}
