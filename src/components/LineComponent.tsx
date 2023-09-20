import React from "react";
import Particles from "react-particles";
import type { Engine } from "tsparticles-engine";
import { loadLinksPreset } from "tsparticles-preset-links";
import "./LineComponent.css";

interface IProps {
  // onSubmit(e:React.FormEvent<HTMLInputElement>):void
}

export class ParticlesContainer2 extends React.PureComponent<IProps> {
  // this customizes the component tsParticles installation
  async customInit(engine: Engine): Promise<void> {
    // this adds the preset to tsParticles, you can safely use the
    await loadLinksPreset(engine);
  }

  render() {
    const options = {
      preset: "links",
      fullScreen: { enable: false, zIndex: 0 },
    };

    return (
      <div className={"container-line-style"}>
        <Particles options={options} init={this.customInit} />
      </div>
    );
  }
}

export default ParticlesContainer2;
