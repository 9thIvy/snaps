import "/src/components/MissionStatement/MissionStatement.scss";

function MissionStatement(){
    return(
    <section className="mission-section">
    <p className="brief">
        Our mission:
    </p>
    <p className="statement">
        Provide photographers a space to share photos of the neighborhoods they cherish, <span className="statement--italic">expressed in their unique style.</span>
    </p>
    </section>
    );
}

export default MissionStatement