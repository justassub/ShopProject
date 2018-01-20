package lt.it.akademija;

import net.sf.log4jdbc.sql.jdbcapi.DataSourceSpy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.autoconfigure.jdbc.DataSourceBuilder;
import org.springframework.boot.autoconfigure.jdbc.DataSourceProperties;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.*;

import javax.sql.DataSource;
import java.util.ArrayList;
import java.util.List;


@ImportResource({"classpath*:application-context.xml"})
@Configuration
@ComponentScan("lt.it.akademija")
public class AppConfig {

}