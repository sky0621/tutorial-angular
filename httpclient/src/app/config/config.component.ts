import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
import { Config } from '../config';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {
  config: Config;
  headers: any
  error: any

  constructor(private configService: ConfigService) { }

  ngOnInit() {
  }

  showConfig() {
    this.configService.getConfig().subscribe(
      (data: Config) => this.config = { ...data },
      error => this.error = error
    );
  }

  showConfigResponse() {
    this.configService.getConfigResponse().subscribe(
      resp => {
        const keys = resp.headers.keys();
        this.headers = keys.map(key =>
          `${key}: ${resp.headers.get(key)}`);
        this.config = { ...resp.body };
      }
    );
  }
}
