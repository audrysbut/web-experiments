import "./SportPage.css";

interface NavigationComponentProps {
  second: number;
}
const NavigationComponent = ({ second }: NavigationComponentProps) => {
  const openInNewTab = () => {
    window.open(
      `https://youtu.be/gPwouYwa8Lk?t=${second}`,
      "_blank",
      "noopener,noreferrer"
    );
  };
  return <div onClick={() => openInNewTab()}>Navigate</div>;
};

export const SportPage = () => {
  return (
    <table className="tableSport">
      <thead>
        <th className="sport">Exercise</th>
        <th className="sport">Reps</th>
        <th className="sport">Count</th>
        <th className="sport">Laikas</th>
      </thead>
      <tbody>
        <tr>
          <td className="sport">13</td>
          <td className="sport">3</td>
          <td className="sport">15</td>
          <td className="sport">
            <NavigationComponent second={6} />
          </td>
        </tr>
        <tr className="sport">
          <td className="sport">12</td>
          <td className="sport">3</td>
          <td className="sport">12</td>
          <td className="sport">
            <NavigationComponent second={24} />
          </td>
        </tr>
        <tr>
          <td className="sport">2</td>
          <td className="sport">3</td>
          <td className="sport">10</td>
          <td className="sport">
            <NavigationComponent second={45} />
          </td>
        </tr>
        <tr>
          <td className="sport">4</td>
          <td className="sport">3</td>
          <td className="sport">10</td>
          <td className="sport">
            <NavigationComponent second={64} />
          </td>
        </tr>
        <tr>
          <td className="sport">6</td>
          <td className="sport">3</td>
          <td className="sport">12</td>
          <td className="sport">
            <NavigationComponent second={87} />
          </td>
        </tr>
        <tr>
          <td className="sport">14</td>
          <td className="sport">3</td>
          <td className="sport">12</td>
          <td className="sport">
            <NavigationComponent second={116} />
          </td>
        </tr>
        <tr>
          <td className="sport">7</td>
          <td className="sport">3</td>
          <td className="sport">10</td>
          <td className="sport">
            <NavigationComponent second={145} />
          </td>
        </tr>
        <tr>
          <td className="sport">8</td>
          <td className="sport">3</td>
          <td className="sport">10</td>
          <td className="sport">
            <NavigationComponent second={162} />
          </td>
        </tr>
      </tbody>
    </table>
  );
};
