import React from "react";
import "./detailKehadiran.css";
import { Collapse } from "antd";

const { Panel } = Collapse;

const DetailKehadiran = () => {
  const items = [
    {
      key: "1",
      header: "Kelas A",
    },
    {
      key: "2",
      header: "Kelas B",
    },
    {
      key: "3",
      header: "Kelas C",
    },
    {
      key: "4",
      header: "Kelas D",
    },
  ];

  return (
    <div>
      <div className="title-page-detail-kehadiran">
        <h2>Halaman Riwayat</h2>
      </div>

      <div className="content-halaman-detail-kehadiran">
        <Collapse className="collapse-detail" expandIconPosition="right" size="small">
          {items.map((item) => (
            <Panel key={item.key} header={item.header} className="panel-collapse">
              <div className="content-panel-collapse">
                <div className="left-content">
                  <p>{item.header}</p>
                </div>
                <div className="right-content">
                  <p>Total presentase kehadiran: 90%</p>
                </div>
              </div>
              <hr />
            </Panel>
          ))}
        </Collapse>
      </div>
    </div>
  );
};

export default DetailKehadiran;
