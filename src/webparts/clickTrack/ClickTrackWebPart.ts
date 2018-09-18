import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './ClickTrackWebPart.module.scss';
import * as strings from 'ClickTrackWebPartStrings';
import 'jquery';

export interface IClickTrackWebPartProps {
  description: string;
  boardId: string;
  sourceId: string;
  downloadUrl: string;
}

export default class ClickTrackWebPartWebPart extends BaseClientSideWebPart<IClickTrackWebPartProps> {

  public render(): void {
    this.domElement.innerHTML = `
    
            <div class='lb-clicktrack'>
              <a href="https://www.rise.global/stream/clicktrack/c/${encodeURIComponent(escape(this.context.pageContext.user.email))}/${escape(this.properties.boardId)}/${escape(this.properties.sourceId)}/api/${encodeURIComponent(escape(this.properties.downloadUrl))}">
              ${escape(this.properties.description)}
              </a>
            </div>`;
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                }),
                PropertyPaneTextField('boardId', {
                  label: strings.BoardIdFieldLabel
                }),
                PropertyPaneTextField('sourceId', {
                  label: strings.SourceIdFieldLabel
                }),
                PropertyPaneTextField('downloadUrl', {
                  label: strings.DownloadUrlFieldLabel
                }),
              ]
            }
          ]
        }
      ]
    };
  }
}
