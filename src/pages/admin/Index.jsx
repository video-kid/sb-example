import React from "react";
import Button from "../../components/Button/Button";
import Navbar from "../../components/Navbar/Navbar";
import * as Heading from "../../components/Heading/Heading";
import Section from "../../components/Section/Section";
import ShowFrog from "../../modules/ShowFrog";

const Index = () => {
  return (
    <main>
      <Navbar>
        <Heading.Primary>Admin Index</Heading.Primary>
        <Button to="/">Link to main</Button>
      </Navbar>
      <ShowFrog />
      <Section>
        <Heading.Secondary>Lorem Ipsum Dolor</Heading.Secondary>
        <Heading.Subheader>Donec vestibulum ipsum ligula</Heading.Subheader>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
        vestibulum ipsum ligula, eget faucibus orci sagittis sit amet. Quisque
        ex nisl, bibendum nec mattis cursus, hendrerit sit amet odio. Sed eu
        orci nunc. Integer tempus lectus non ligula interdum gravida. Donec a
        dignissim risus. Integer quis luctus nunc. Nam facilisis leo sed feugiat
        porttitor. Duis posuere imperdiet diam, eget facilisis mi mattis a. Cras
        nec ultricies mi, sit amet egestas augue. Integer pellentesque commodo
        dictum. Etiam ultricies, augue id faucibus dapibus, lectus nunc egestas
        mi, et faucibus eros est non nisl. Phasellus vulputate felis nec nunc
        ullamcorper feugiat. Ut risus nibh, tincidunt vitae lobortis sed,
        consectetur suscipit arcu. Mauris tempus mauris non consequat hendrerit.
        Etiam tristique mattis laoreet. Vestibulum feugiat placerat neque ac
        mollis. Aenean sit amet ante in orci feugiat sollicitudin. Morbi viverra
        libero et aliquet faucibus. Morbi accumsan eget odio vitae sagittis.
        Donec pellentesque mi ligula, gravida ullamcorper tortor commodo a.
      </Section>
      <Section>
        <Heading.Secondary>Lorem Ipsum Dolor</Heading.Secondary>
        Praesent facilisis arcu at auctor tincidunt. Ut quis felis et lacus
        consequat ultrices. Interdum et malesuada fames ac ante ipsum primis in
        faucibus. Donec eget congue quam. Suspendisse nec mauris ut neque
        iaculis volutpat. Vestibulum euismod pharetra mattis. Proin eu porttitor
        lorem. Fusce et gravida eros, et laoreet elit. Nulla libero urna,
        egestas sed sem at, laoreet vehicula velit. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nam tempor condimentum tellus, suscipit
        tincidunt ipsum lobortis non. Integer ullamcorper ante et auctor
        hendrerit. In accumsan sodales facilisis. Duis commodo justo dui, sit
        amet viverra libero porta non. Sed tempus pellentesque erat ut
        tristique. Duis a nulla commodo, euismod leo vel, dignissim mauris.
        Maecenas scelerisque porttitor orci id sodales. Aenean elementum ut ante
        sed hendrerit. Donec molestie semper purus, vitae ultricies ipsum
        elementum non. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Section>
      <Section>
        <Heading.Secondary>Lorem Ipsum Dolor</Heading.Secondary>
        Nam vel quam dignissim, rutrum ante volutpat, interdum felis. Donec
        lobortis posuere convallis. Proin venenatis semper dictum. Proin
        volutpat pretium augue. Nam pretium congue odio, in efficitur erat
        tempor quis. Vestibulum faucibus, quam vel volutpat iaculis, ante est
        dapibus nisl, vitae porttitor nisi libero a lacus. Pellentesque egestas
        ante nulla, nec interdum tortor hendrerit vel. Donec leo ipsum, interdum
        vel ligula at, vestibulum volutpat diam. Nullam a mauris libero. Duis
        mattis nunc quam, ac ullamcorper tellus volutpat ac. Etiam mattis nunc
        ut mi volutpat ultrices. Vivamus accumsan ex auctor tincidunt tincidunt.
        Donec ut leo lacus. Curabitur semper, felis quis auctor finibus, dolor
        purus efficitur risus, in vehicula mauris orci vitae turpis. Vivamus
        nisl odio, molestie rhoncus faucibus et, auctor eget nulla. Ut
        condimentum, turpis nec ornare posuere, quam est consequat ante, eget
        aliquet eros dui porttitor eros. Praesent venenatis orci eu nisi
        fermentum commodo. Vivamus ultrices commodo nulla, ut pellentesque
        massa. Etiam ex metus, facilisis non lacus et, accumsan iaculis ligula.
        Donec malesuada velit id ex gravida tincidunt.
      </Section>
    </main>
  );
};

export default Index;
