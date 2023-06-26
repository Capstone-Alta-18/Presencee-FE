import React from "react";
import "./detailKehadiran.css";
import { Button, Collapse, Table } from "antd";
import { GET_MATKUL, GET_MATKULB, GET_MATKULC, GET_MATKULD } from "./Query/users_Query";
import { useQuery } from "@apollo/client";
const { Panel } = Collapse;

const DetailKehadiran = () => {
  const { data: MataKuliahData, loading: isMataKuliahLoading, error: mataKuliahErrors } = useQuery(GET_MATKUL);
  const { data: MataKuliahBData, loading: isMataKuliahBLoading, error: mataKuliahBErrors } = useQuery(GET_MATKULB);
  const { data: MataKuliahCData, loading: isMataKuliahCLoading, error: mataKuliahCErrors } = useQuery(GET_MATKULC);
  const { data: MataKuliahDData, loading: isMataKuliahDLoading, error: mataKuliahDErrors } = useQuery(GET_MATKULD);

  const TABLE_MATA_KULIAH = [
    {
      dataIndex: "mataKuliah",
      key: "mataKuliah",
    },
    {
      dataIndex: "Persentase",
      key: "Persentase",
    },
  ];

  const goBack = () => {
    window.history.back();
  };

  return (
    <div>
      <div className="title-page-detail-kehadiran">
        <h2>Halaman Riwayat</h2>
      </div>

      <div className="content-halaman-detail-kehadiran">
        <Collapse className="collapse-detail" expandIconPosition="right" size="small">
          <Panel header="kelas A" className="panel-collapse">
            <div className="content-panel-collapse">
              <Table className="table-matkul" columns={TABLE_MATA_KULIAH} dataSource={MataKuliahData?.MataKuliah} pagination={false} loading={isMataKuliahLoading || mataKuliahErrors} />
              <Button className="btn-back-matkul" onClick={goBack}>
                Back
              </Button>
            </div>
          </Panel>
          <Panel header="kelas B" className="panel-collapse">
            <div className="content-panel-collapse">
              <Table className="table-matkul" columns={TABLE_MATA_KULIAH} dataSource={MataKuliahBData?.MataKuliahB} pagination={false} loading={isMataKuliahBLoading || mataKuliahBErrors} />
              <Button className="btn-back-matkul" onClick={goBack}>
                Back
              </Button>
            </div>
          </Panel>
          <Panel header="kelas C" className="panel-collapse">
            <div className="content-panel-collapse">
              <Table className="table-matkul" columns={TABLE_MATA_KULIAH} dataSource={MataKuliahCData?.MataKuliahC} pagination={false} loading={isMataKuliahCLoading || mataKuliahCErrors} />
              <Button className="btn-back-matkul" onClick={goBack}>
                Back
              </Button>
            </div>
          </Panel>
          <Panel header="kelas D" className="panel-collapse">
            <div className="content-panel-collapse">
              <Table className="table-matkul" rowClassName={() => "rowClassNamematkul"} columns={TABLE_MATA_KULIAH} dataSource={MataKuliahDData?.MataKuliahD} pagination={false} loading={isMataKuliahDLoading || mataKuliahDErrors} />
              <Button className="btn-back-matkul" onClick={goBack}>
                Back
              </Button>
            </div>
          </Panel>
        </Collapse>
      </div>
    </div>
  );
};

export default DetailKehadiran;
