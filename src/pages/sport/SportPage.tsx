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
    <table>
      <thead>
        <th>Exercise</th>
        <th>Reps</th>
        <th>Count</th>
        <th>Laikas</th>
      </thead>
      <tbody>
        <tr>
          <td>13</td>
          <td>3</td>
          <td>15</td>
          <td>
            <NavigationComponent second={6} />
          </td>
        </tr>
        <tr>
          <td>12</td>
          <td>3</td>
          <td>12</td>
          <td>
            <NavigationComponent second={24} />
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>3</td>
          <td>10</td>
          <td>
            <NavigationComponent second={45} />
          </td>
        </tr>
        <tr>
          <td>4</td>
          <td>3</td>
          <td>10</td>
          <td>
            <NavigationComponent second={64} />
          </td>
        </tr>
        <tr>
          <td>6</td>
          <td>3</td>
          <td>12</td>
          <td>
            <NavigationComponent second={87} />
          </td>
        </tr>
        <tr>
          <td>14</td>
          <td>3</td>
          <td>12</td>
          <td>
            <NavigationComponent second={116} />
          </td>
        </tr>
        <tr>
          <td>7</td>
          <td>3</td>
          <td>10</td>
          <td>
            <NavigationComponent second={145} />
          </td>
        </tr>
        <tr>
          <td>8</td>
          <td>3</td>
          <td>10</td>
          <td>
            <NavigationComponent second={162} />
          </td>
        </tr>
      </tbody>
    </table>
  );
};
