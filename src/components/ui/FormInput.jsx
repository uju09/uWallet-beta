import React from 'react';

const FormInput = ({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  icon: Icon,
  rightLink,
  required = false,
}) => {
  return (
    <div className="space-y-1.5">
      {label && (
        <div className={rightLink ? 'flex justify-between items-center ml-1' : 'ml-1'}>
          <label className="text-[10px] uppercase font-extrabold text-[#8FA396] tracking-widest">
            {label}
          </label>
          {rightLink && (
            <a href={rightLink.href} className="text-[10px] text-[#D4FF00] uppercase font-bold hover:underline">
              {rightLink.text}
            </a>
          )}
        </div>
      )}
      <div className={Icon ? 'relative group' : ''}>
        {Icon && (
          <Icon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8FA396]" />
        )}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`w-full bg-[#1A2920] border border-transparent focus:border-[#D4FF00]/50 rounded-2xl py-4 text-white outline-none transition-all placeholder:text-white/10 ${Icon ? 'pl-12 pr-4' : 'px-4'}`}
          required={required}
        />
      </div>
    </div>
  );
};

export default FormInput;
