import { Container, Image, Badge } from 'react-bootstrap';
import { FaReact} from 'react-icons/fa';
<FaReact style={{ color: '#61dafb' }} />

import '../css/main.css'; // 스타일 시트 불러오기

function About() {
  return (
    <div className="main-content">
      <Container fluid className="p-5 text-white bg-dark">
        <div className="profile-section">
          <Image src="https://imgs.jobkorea.co.kr/img1/user_photo/photo/2024\2\01\JK_GG_uxLyhN24020118212382.jpg" className="profile-image" />
          <div className="profile-text">
            <h2>김민서</h2>
            <p>1998.12.09</p>
            <Badge bg="secondary">Frontend Developer</Badge>
            <p className="mt-3">
              어려운 환경 속에서도 끝까지 맡은 바 역할을 완수하며 성장해온 주니어 개발자 <b>김민서</b>입니다.<br/>
              끈기와 도전 정신으로 실무를 넘어, 지속적인 학습과 경험을 통해 실전 감각을 쌓아왔습니다.
            </p>
          </div>
        </div>

        <hr className="my-4" />
        <div className='skill'>
          <h3 className="mt-5 SKillsAbility">SKILLS ABILITY</h3>
            <div className="d-flex flex-wrap gap-3">
              <Badge pill bg="light" text="dark" className="badge-light" style={{ backgroundColor: '#3d3d3d' }}>
                <span style={{ color: 'white' }}>React.js</span>
              </Badge>
              <Badge pill bg="light" text="dark" className="badge-light" style={{ backgroundColor: '#3d3d3d' }}>
                 <span style={{ color: 'white' }}>JavaScript(ES6+)</span>
              </Badge>
              <Badge pill bg="light" text="dark" className="badge-light" style={{ backgroundColor: '#3d3d3d' }}>
                <span style={{ color: 'white' }}>HTML5</span>
              </Badge>
              <Badge pill bg="light" text="dark" className="badge-light" style={{ backgroundColor: '#3d3d3d' }}>
                <span style={{ color: 'white' }}>CSS3</span>
              </Badge>
              <Badge pill bg="light" text="dark" className="badge-light" style={{ backgroundColor: '#3d3d3d' }}>
                <span style={{ color: 'white' }}>Git</span>
              </Badge>
            </div>
       </div>
        
        </Container>
    </div>
  );
}

export default About;
