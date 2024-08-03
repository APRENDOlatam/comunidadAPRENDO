import { FunctionComponent } from "react";

const ConectarTuDiscord: FunctionComponent = () => {
  return (
    <div className="w-full relative overflow-hidden flex flex-col items-center justify-start gap-20 bg-[url('/public/conectar-tu-discord@3x.png')] bg-cover bg-no-repeat bg-[top] leading-[normal] tracking-[normal] text-left text-base text-w1 font-single-line-body-base gap-5 gap-10">
      <header className="self-stretch [background:linear-gradient(180deg,_#055f56_58%,_rgba(5,_95,_86,_0))] flex flex-col items-center justify-start pt-[67px] px-5 pb-[64.5px] box-border gap-3 max-w-full text-center text-5xl text-a1 font-montserrat">
        <h3 className="m-0 relative text-inherit leading-[34px] font-bold font-[inherit] whitespace-nowrap">
          Bienvenid@ a la
        </h3>
        <img
          className="w-[358.9px] relative max-h-full max-w-full"
          loading="lazy"
          alt=""
          src="/comunidad.svg"
        />
      </header>
      <div className="w-[366px] h-[278px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] bg-b3 border-b3 border-[12px] border-solid box-border flex flex-row flex-wrap items-start justify-start gap-2.5 max-w-full mq450:w-[calc(100%_-_40px)]">
        <div className="w-[341px] flex flex-row items-center justify-center gap-2.5 max-w-full font-montserrat">
          <img
            className="h-[39.3px] w-[53.2px] relative shrink-0"
            loading="lazy"
            alt=""
            src="/vector.svg"
          />
          <b className="w-[317.9px] relative leading-[140%] flex items-center shrink-0 box-border pl-5 pr-5">
            Conecta tu cuenta de Discord para ingresar
          </b>
        </div>
        <div className="h-[60px] w-[342px] border-b2 border-[1px] border-solid box-border flex flex-row items-center justify-start gap-1.5 max-w-full">
          <img
            className="h-[22px] w-[22px] relative overflow-hidden shrink-0 hidden"
            loading="lazy"
            alt=""
            src="/vector1.svg"
          />
          <div className="relative leading-[20px] font-medium">
            Cuenta de discord
          </div>
        </div>
        <div className="h-[60px] w-[342px] border-b2 border-[1px] border-solid box-border flex flex-row items-start justify-start gap-1.5 max-w-full">
          <img
            className="h-[22px] w-[22px] relative overflow-hidden shrink-0 hidden"
            loading="lazy"
            alt=""
            src="/vector1.svg"
          />
          <div className="relative leading-[20px] font-medium inline-block min-w-[89px]">
            Contraseña
          </div>
        </div>
        <div className="h-[60px] w-[342px] bg-a1 flex flex-row items-center justify-center gap-1.5 whitespace-nowrap max-w-full text-w3">
          <img
            className="h-[22px] w-[22px] relative overflow-hidden shrink-0 hidden"
            loading="lazy"
            alt=""
            src="/vector1.svg"
          />
          <div className="w-[254px] relative leading-[20px] font-semibold flex items-center box-border pl-5 pr-5">{`Identificarse / Iniciar sesión `}</div>
        </div>
      </div>
      <header className="w-[1440px] h-[140px] !m-[0] absolute top-[662px] left-[0px] [background:linear-gradient(180deg,_rgba(5,_95,_86,_0),_#055f56_48%)] flex flex-col items-center justify-start pt-[67px] px-5 pb-[64.5px] box-border gap-3 text-center text-xs text-a1 font-montserrat">
        <h3 className="m-0 relative text-inherit leading-[17px] font-normal font-[inherit] whitespace-nowrap">{`La #comunidadAPRENDO es una iniciativa de `}</h3>
        <img
          className="w-[291.9px] h-[50.4px] relative shrink-0"
          loading="lazy"
          alt=""
          src="/comunidad1.svg"
        />
      </header>
    </div>
  );
};

export default ConectarTuDiscord;
