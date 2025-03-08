import { sanityFetch } from "@/lib/sanity";
import { CONTACTS_QUERY } from "@/query/sanity";
import { ArrowUpRight, Mail, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";
import React from "react";
import { FaGithub, FaInstagram, FaLinkedinIn, FaTiktok } from "react-icons/fa";

type Contact = {
  email: {
    label: string;
    url: string;
    value: string;
  };
  messenger: {
    label: string;
    url: string;
    value: string;
  };
  phoneNumber: {
    label: string;
    url: string;
    value: string;
  };
  github: string;
  instagram: string;
  tiktok: string;
  linkedin: string;
};

const ContactSection = async () => {
  const contact = await sanityFetch<Contact>({
    query: CONTACTS_QUERY,
  });


  return (
    <section
      id="contact"
      className="w-full sm:px-10 sm:py-16 flex flex-col items-center gap-8 sm:gap-12"
    >
      <div className="text-center space-y-2">
        <p className="text-4xl font-bold">Get in touch</p>
        <p className="max-w-md text-white/50">
          Want to work together or just want to say hi? Feel free to reach out
        </p>
      </div>

      <div className="w-full flex flex-col items-center gap-8">
        <div className="w-full flex flex-wrap items-center justify-center gap-4">
          <Link
            href={`mailto:${contact.email.url}`}
            className="w-full max-w-xs "
          >
            <div
              data-aos="zoom-in"
              data-aos-delay="200"
              className="p-4 flex flex-col justify-center gap-4 bg-white/10 hover:bg-white/5 rounded-xl"
            >
              <div className="w-full flex justify-between gap-4">
                <div className="flex items-center gap-2">
                  <Mail /> {contact.email.label}
                </div>

                <ArrowUpRight className="text-orange" />
              </div>
              <p className="text-sm text-white/50 font-light">
                {contact.email.url}
              </p>
            </div>
          </Link>

          <Link
            href={contact.messenger.url}
            target="_blank"
            className="w-full max-w-xs "
          >
            <div
              data-aos="zoom-in"
              data-aos-delay="200"
              className="p-4 flex flex-col justify-center gap-4 bg-white/10 hover:bg-white/5 rounded-xl"
            >
              <div className="w-full flex justify-between gap-4">
                <div className="flex items-center gap-2">
                  <MessageCircle /> {contact.messenger.label}
                </div>

                <ArrowUpRight className="text-orange" />
              </div>
              <p className="text-sm text-white/50 font-light">
                {contact.messenger.value}
              </p>
            </div>
          </Link>

          <div
            data-aos="zoom-in"
            data-aos-delay="200"
            className="w-full max-w-xs p-4 flex flex-col justify-center gap-4 bg-white/10 rounded-xl"
          >
            <div className="flex items-center gap-2">
              <Phone /> {contact.phoneNumber.label}
            </div>

            <p className="text-sm text-white/50 font-light">
              {contact.phoneNumber.value}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-12 sm:w-16 h-px bg-orange"></div>
          <p className="text-nowrap">Stay Connected</p>
          <div className="w-12 sm:w-16 h-px bg-orange"></div>
        </div>

        <div className="flex items-center gap-6">
          <Link href={contact.github} target="_blank">
            <FaGithub className="size-6 hover:text-orange" />
          </Link>
          <Link href={contact.instagram} target="_blank">
            <FaInstagram className="size-6 hover:text-orange" />
          </Link>
          <Link href={contact.tiktok} target="_blank">
            <FaTiktok className="size-6 hover:text-orange" />
          </Link>
          <Link
            href={contact.linkedin}
            target="_blank"
          >
            <FaLinkedinIn className="size-6 hover:text-orange" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
