export default class Content {
    
    private temperatura: string = "0";
    private minTemp: string = "0";
    private maxTemp: string = "0";
    private luminosidade: string = "0";
    private minLum: string = "0";
    private maxLum: string = "0";
    private umidade: string = "0"
    private minUmid: string = "0";
    private maxUmid: string = "0";
    private currentColor: string = "0";
    private statusBuzzer: string = "0";


	constructor($temperatura: string , $minTemp: string , $maxTemp: string , $luminosidade: string , $minLum: string , $maxLum: string , $umidade: string , $minUmid: string , $maxUmid: string , $currentColor: string , $statusBuzzer: string ) {
		this.temperatura = $temperatura;
		this.minTemp = $minTemp;
		this.maxTemp = $maxTemp;
		this.luminosidade = $luminosidade;
		this.minLum = $minLum;
		this.maxLum = $maxLum;
		this.umidade = $umidade;
		this.minUmid = $minUmid;
		this.maxUmid = $maxUmid;
		this.currentColor = $currentColor;
		this.statusBuzzer = $statusBuzzer;
	}


    /**
     * Getter $temperatura
     * @return {string }
     */
	public get $temperatura(): string  {
		return this.temperatura;
	}

    /**
     * Getter $minTemp
     * @return {string }
     */
	public get $minTemp(): string  {
		return this.minTemp;
	}

    /**
     * Getter $maxTemp
     * @return {string }
     */
	public get $maxTemp(): string  {
		return this.maxTemp;
	}

    /**
     * Getter $luminosidade
     * @return {string }
     */
	public get $luminosidade(): string  {
		return this.luminosidade;
	}

    /**
     * Getter $minLum
     * @return {string }
     */
	public get $minLum(): string  {
		return this.minLum;
	}

    /**
     * Getter $maxLum
     * @return {string }
     */
	public get $maxLum(): string  {
		return this.maxLum;
	}

    /**
     * Getter $umidade
     * @return {string }
     */
	public get $umidade(): string  {
		return this.umidade;
	}

    /**
     * Getter $minUmid
     * @return {string }
     */
	public get $minUmid(): string  {
		return this.minUmid;
	}

    /**
     * Getter $maxUmid
     * @return {string }
     */
	public get $maxUmid(): string  {
		return this.maxUmid;
	}

    /**
     * Getter $currentColor
     * @return {string }
     */
	public get $currentColor(): string  {
		return this.currentColor;
	}

    /**
     * Getter $statusBuzzer
     * @return {string }
     */
	public get $statusBuzzer(): string  {
		return this.statusBuzzer;
	}

    /**
     * Setter $temperatura
     * @param {string } value
     */
	public set $temperatura(value: string ) {
		this.temperatura = value;
	}

    /**
     * Setter $minTemp
     * @param {string } value
     */
	public set $minTemp(value: string ) {
		this.minTemp = value;
	}

    /**
     * Setter $maxTemp
     * @param {string } value
     */
	public set $maxTemp(value: string ) {
		this.maxTemp = value;
	}

    /**
     * Setter $luminosidade
     * @param {string } value
     */
	public set $luminosidade(value: string ) {
		this.luminosidade = value;
	}

    /**
     * Setter $minLum
     * @param {string } value
     */
	public set $minLum(value: string ) {
		this.minLum = value;
	}

    /**
     * Setter $maxLum
     * @param {string } value
     */
	public set $maxLum(value: string ) {
		this.maxLum = value;
	}

    /**
     * Setter $umidade
     * @param {string } value
     */
	public set $umidade(value: string ) {
		this.umidade = value;
	}

    /**
     * Setter $minUmid
     * @param {string } value
     */
	public set $minUmid(value: string ) {
		this.minUmid = value;
	}

    /**
     * Setter $maxUmid
     * @param {string } value
     */
	public set $maxUmid(value: string ) {
		this.maxUmid = value;
	}

    /**
     * Setter $currentColor
     * @param {string } value
     */
	public set $currentColor(value: string ) {
		this.currentColor = value;
	}

    /**
     * Setter $statusBuzzer
     * @param {string } value
     */
	public set $statusBuzzer(value: string ) {
		this.statusBuzzer = value;
	}


}