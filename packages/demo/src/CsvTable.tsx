import React from 'react';
import styled from 'styled-components';
import { Table, TableColumn } from 'react-compact-table';
import autobind from 'autobind-decorator';

const DropArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 500px;
  height: 300px;
  padding: 10px 15px;
  border: solid 2px #555;
  border-style: dashed;
`;

const Notice = styled.div`
  font-size: 15px;
  font-weight: bold;
`;

const Text = styled.span`
  font-size: 13px;
  color: #333333;
`;

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 69px;
`;

const Button = styled.div`
  padding: 8px 13px;
  border-radius: 1px;
  background: #5d95ff;
  color: #fff;
  font-size: 15px;
  cursor: pointer;
`;

interface CsvTableProps {
  data: any[];
  openUploader: () => void;
}

class CsvTable extends React.Component<CsvTableProps> {
  public render() {
    const { data } = this.props;
    const hasData = data.length > 0;
    return (
      <>
        {hasData ? (
          <Table
            data={data}
            headerHeight="30px"
            headerFontSize="13px"
            headerFontColor="#333"
            minWidth="600px"
            rowHeight="25px"
            renderFooterChildren={this.renderFooterChildren}
          >
            <TableColumn dataKey="name" label="Name" help="this is pure text" align="left">
              {({ value }) => <Text>{value}</Text>}
            </TableColumn>
            <TableColumn dataKey="objective" label="Objective" width="150px" align="center">
              {({ value }) => <Text>{value}</Text>}
            </TableColumn>
            <TableColumn dataKey="conversions" label="Conversions" width="120px" align="left">
              {({ value }) => <Text>{value || 0}</Text>}
            </TableColumn>
            <TableColumn dataKey="cvr" label="CVR" width="100px" align="left">
              {({ value }) => <Text>{value || 0}</Text>}
            </TableColumn>
          </Table>
        ) : (
          <DropArea>
            {this.renderFooterChildren()}
            <Notice>you can also upload csv file by drop this area</Notice>
          </DropArea>
        )}
      </>
    );
  }

  @autobind
  private renderFooterChildren() {
    const { openUploader } = this.props;
    return (
      <FooterContainer id="creativeSectionFooter">
        <Button onClick={openUploader}>Upload CSV</Button>
      </FooterContainer>
    );
  }
}

export default CsvTable;
