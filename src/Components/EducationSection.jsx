import ImportContactsOutlinedIcon from '@mui/icons-material/ImportContactsOutlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
const educationData = [
  {
    icon: <SchoolOutlinedIcon color="primary"/>,
    degree: "Bachelor of Engineering (B.Eng.) in Computer Engineering",
    school: "Lagos State University of Science and Technology, Nigeria",
    duration: "2025 - 2030",
    
  },
  
  {
    icon: <WorkspacePremiumOutlinedIcon color="primary"/>,
    degree: "Frontend Web Development Training",
    school: "KodeCamp",
    duration: "2025",
  },
];

const EducationSection = () => {
  return (
    <>
        {educationData.map(data=>{
            return(
                <>
                    <div className="col-12 col-md-8 col-lg-6 card shadow-sm border-0 rounded-3 p-3 mb-4">
                    <div className="d-flex align-items-center">
                        <div className="bg-light rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: "50px", height: "50px" }}>
                        {data.icon}
                        </div>
                        <div>
                        <h5 className="fw-bold mb-1">{data.degree}</h5>
                        <p className="mb-0 text-muted">{data.school}</p>
                        <p className="mb-0 text-muted">{data.duration}</p>
                        <p className="text-primary mb-0">{data.grade}</p>
                        </div>
                    </div>
                    </div>
                </>
            )
        })}
    </>
    
  )
}

export default EducationSection