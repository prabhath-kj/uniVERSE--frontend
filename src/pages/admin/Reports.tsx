import {useSelector,useDispatch} from "react-redux"
import { RootState } from "../../state/rooState";
import { useEffect } from "react";
import ReportTable from "../../components/Admin/ReportsTable";
import apiCalls from "../../services/admin/apiCalls";
import { setReport } from "../../state/admin";


const Reports = () => {
const dispatch =useDispatch()
const reports=useSelector((state:RootState)=>state.admin.reports)

  useEffect(()=>{  
    getReports()
  
  },[])
  
  const getReports = async () => {
    const { report } = await apiCalls.GetReportedPost();    
    dispatch(setReport(report));
  };

  return (
    <div >
    <ReportTable reports={reports} />
    </div>

  )
}

export default Reports