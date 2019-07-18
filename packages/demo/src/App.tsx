import React from 'react';
import { CsvDropzone } from 'react-csv-uploader';
import styled from 'styled-components';
import autobind from 'autobind-decorator';

import CsvTable from './CsvTable';
import _ from 'lodash';

const Container = styled.div`
  position: relative;
  width: 100%;
`;

interface AppProps {}

interface AppState {
  data: any[];
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = { data: [] };
  }

  public render() {
    const { data } = this.state;
    return (
      <Container>
        <CsvDropzone onFileLoad={this.handleFileLoad}>
          {({ openUploader }) => (
            <>
              <CsvTable data={data} openUploader={openUploader} />
            </>
          )}
        </CsvDropzone>
      </Container>
    );
  }

  @autobind
  private async handleFileLoad(data: any[]) {
    const mapped = _.map(data, ([id, name, objective, conversions, cvr]) => ({
      id,
      name,
      objective,
      conversions,
      cvr
    }));
    this.setState({ data: mapped });
  }
}

export default App;
