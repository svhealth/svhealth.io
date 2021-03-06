import React from "react";

import Section from "root/components/Section";
import Typography from "root/components/Typography";
import Contact from "root/components/Contact";
import WavyLink from "root/components/WavyLink";
import ContactForm from "root/components/ContactForm";

import "./index.css";

export default function LetsTalk() {
  return (
    <Section verticalSpacing={false}>
      <div styleName="root">
        <div styleName="left">
          <div styleName="lets-talk">
            <Typography variant="h2" weight="bold" color="klein-blue">
              Let&apos;s talk?
            </Typography>
            <div styleName="wave-mobile">
              <WavyLink />
            </div>
          </div>
          <div styleName="reach">
            <Typography color="klein-blue">
              Reach us via this form or drop us a email.
            </Typography>
          </div>
          <div styleName="link">
            <Contact underlineColor="klein-blue">
              <Typography color="klein-blue">
                contact@auroradigital.co
              </Typography>
            </Contact>
          </div>
          <div styleName="wave-desktop">
            <WavyLink />
          </div>
        </div>
        <div styleName="right">
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}
