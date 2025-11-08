import { useEffect, useState } from "react";
import { Button, Container, Modal, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAllSuarah } from "../RTK/Slices/Quran-slice";
import Spinner from "../pages/Spinner";
import SurahReader from "../pages/SurahReader";
export default function Fahras() {
  const surahs = useSelector((state) => state.Quran.data);
  const [surahId, setSurahId] = useState(0);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const handleClose = () => {
    setShow(false);
    dispatch(getAllSuarah());
  };
  const handleShow = (id) => {
    setSurahId(id);
    setShow(true);
  };
  useEffect(() => {
    dispatch(getAllSuarah());
  }, [dispatch]);

  return (
    <>
      <Container fluid className="">
        {surahs?.length > 0 ? (
          <Table striped bordered hover>
            <thead>
              <tr className="bg-dark">
                <th className="fw-bold text-center">م</th>
                <th className="fw-bold text-center">إسم السورة</th>
                <th className="fw-bold text-center d-none d-md-table-cell">
                  إسم السورة بلانجليزية
                </th>
                <th className="fw-bold text-center">القراءة</th>
                <th className="fw-bold text-center">نوع السورة</th>
                <th className="fw-bold text-center">عدد الآيات</th>
              </tr>
            </thead>
            <tbody>
              {surahs?.map((surah, index) => {
                return (
                  <tr key={surah.id}>
                    <td className="text-center">{index + 1}</td>
                    <td className="text-center">{surah.name_arabic}</td>
                    <td className="text-center d-none d-md-table-cell">
                      {surah.name_simple}
                    </td>
                    <td className="text-center">
                      <button
                        className="btn custom-button fw-bold px-3"
                        onClick={() => {
                          handleShow(surah.id);
                        }}
                      >
                        قراءة | Read
                      </button>
                    </td>
                    <td className="text-center">
                      {surah.revelation_place === "Meccan" ? "مكية" : "مدنية"}
                    </td>
                    <td className="text-center">{surah.verses_count}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        ) : (
          <div className="text-center">
            <Spinner />
          </div>
        )}
      </Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body
          className="overflow-y-auto overflow-x-hidden p-0"
          style={{ height: "80vh" }}
        >
          <SurahReader id={surahId} />
        </Modal.Body>
        <Modal.Footer className="text-star">
          <Button
            variant="danger"
            className="fw-bold w-50 m-auto rounded-0"
            onClick={handleClose}
          >
            إغلاق
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
