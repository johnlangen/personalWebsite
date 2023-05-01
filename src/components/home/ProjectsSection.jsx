import React from "react";
import pdf1 from "../../editable-stuff/project1.pdf";
import pdf2 from "../../editable-stuff/project2.pdf";

const ProjectsSection = () => {
  return (
    <div id="projects" className="jumbotron jumbotron-fluid m-0">
      <div className="container container-fluid">
        <h3 className="display-4 mb-5 text-center">Projects</h3>
        <div className="row">
          <div className="col-md-6">
            <h3>Stock predictions using LSTM</h3>
            <p>
            Accurately predicting stock prices is a challenging task 
            due to the complex and dynamic nature of financial markets, 
            but Long Short-Term Memory (LSTM) networks have shown promise 
            in addressing this challenge by modeling complex temporal relationships 
            in data for time-series analysis. 
            </p>
            <a href={pdf1} target="_blank" rel="noreferrer">
              View PDF
            </a>
          </div>
          <div className="col-md-6">
            <h3>Skin Lesion Classification using Deep Learning</h3>
            <p>
            This paper discusses the importance of early and accurate detection of skin lesions, 
            particularly in relation to skin cancer. The authors compare the performance of various 
            deep learning architectures for skin lesion classification and address the challenges and 
            limitations of these models, as well as providing insights for future research in this area.
            </p>
            <a href={pdf2} target="_blank" rel="noreferrer">
              View PDF
            </a>
          </div>
        </div>
      </div>
      <style jsx>{`
        #projects {
          h3 {
            font-weight: bold;
            margin-bottom: 1rem;
          }

          p {
            margin-bottom: 1rem;
          }

          a {
            font-weight: bold;
            color: #007bff;
            text-decoration: none;
          }

          a:hover {
            text-decoration: underline;
          }
        }
      `}</style>
    </div>
  );
};

export default ProjectsSection;
